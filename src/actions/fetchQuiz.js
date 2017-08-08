import _ from 'lodash';
import { setProgressStatus } from '.';
import { questions } from '../data/questions';
import {
  IS_AFTER_BE_SUBQUESTION,
  COMPLEMENT_SUBQUESTION,
  FETCH_QUIZ
} from '../constants';

const mapAfterBeQuestion = (question) => {
  return {
    id: 1,
    type: IS_AFTER_BE_SUBQUESTION,
    isAfterBe: { text: 'to be', isCorrect: question.afterBe, id: 1 }
  };
}

const mapPrepositions = (prepositions) => {
  return prepositions.map((preposition, i) => {
    return {
      id: i + 1,
      text: preposition.text, 
      isCorrect: preposition.isCorrect, 
      isChecked: false 
    };
  });
}

const mapComplement = (complement, id) => {
  return {
      id,
      type: COMPLEMENT_SUBQUESTION,
      text: complement.text,
      comment: complement.comment,
      prepositions: mapPrepositions(complement.prepositions)
    };
}

const mapSubquestions = (question) => {
  const afterBeQuestion = mapAfterBeQuestion(question);
  const complements = question.complements.map((complement, i) => {
    const mappedComplement = mapComplement(complement, i + 2);
    return mappedComplement;
  });

  return [ afterBeQuestion, ...complements ];
}

/**
 * returns selected array of processed questions
 * 
 * @param {integer} capacity is how many questions in quiz
 * @param {integer} selected if all questions are divided by capacity, we have
 * a number of quizes, selected is an index in that array, starts with 1
 */
const getQuestions = (questions) => {
    const quizQuestions = questions
      .map((question, i) => {
        const newQuestion = {
          word: question.text,
          subquestions: mapSubquestions(question),
        }
        return newQuestion;
      });
    return quizQuestions;
}

const getQuiz = (mode, capacity, selected, questions) => {
  const quiz = {
    capacity,
    restartOptions: { mode, capacity, selected },
    questions: []
  };

  switch(mode.toLowerCase()) {
    case 'all':
      quiz.capacity = questions.length;
      quiz.questions.push(..._.shuffle(questions));
      break;

    case 'part':
      const begin = capacity * (selected - 1);
      const end = capacity * selected;
      const partQuestions = questions.slice(begin, end);
      quiz.questions.push(..._.shuffle(partQuestions));
      break;

    case 'random':
      const randomQuestions = _.shuffle(questions).slice(0, capacity);
      quiz.questions.push(...randomQuestions);
      break;

    default:
      console.error('Unknown quiz mode:', mode);
  }
  
  return quiz;
}

export const fetchQuiz = ({ mode, capacity, selected }) => {
  const quiz = getQuiz(mode, capacity, selected, getQuestions(questions));

  return (dispatch) => {
    dispatch({
      type: FETCH_QUIZ,
      payload: quiz
    });

    dispatch(setProgressStatus({
      success: 0,
      wrong: 0,
      total: quiz.capacity
    }));
  };
}