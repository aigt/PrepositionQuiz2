import { questions } from '../data/questions';
import _ from 'lodash';
import {
  BUTTON_CLICKED,
  CHECK_QUESTION,
  NEXT_QUESTION, 
  FETCH_QUIZ,
  SET_PROGRESS_STATUS,
  SKIP_QUESTION
} from '../constants';

export function buttonClicked(id) {
  return {
    type: BUTTON_CLICKED,
    payload: id
  };
}

export function checkQuestion() {
  return {
    type: CHECK_QUESTION,
    payload: null
  };
}

export function nextQuestion() {
  return {
    type: NEXT_QUESTION
  };
}

export function fetchQuiz({ mode, capacity, selected }) {
  const quiz = {
    capacity,
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

export function skipQuestion() {
  return {
    type: SKIP_QUESTION
  };
}

export function setProgressStatus(status) {
  return {
    type: SET_PROGRESS_STATUS,
    payload: status
  };
}