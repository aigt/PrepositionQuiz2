import { questions } from '../data/questions';
import * as checkQuestionLib from './QuestionActions.checkQuestion';
import _ from 'lodash';
import {
  BUTTON_CLICKED,
  CHECK_QUESTION,
  NEXT_QUESTION, 
  FETCH_QUIZ,
  SET_PROGRESS_STATUS,
  SPLIT_QUESTIONS,
  ADD_SUCCESS_TO_PROGRESS,
  ADD_WRONG_TO_PROGRESS,
  SKIP_QUESTION,
  SHOW_RESULT
} from '../constants';

export function buttonClicked(id) {
  return {
    type: BUTTON_CLICKED,
    payload: id
  };
}

export function checkQuestion(question) {
  checkQuestionLib.checkQuestion(question);
  return (dispatch) => {
    dispatch({
      type: CHECK_QUESTION,
      payload: question
    });
    if(question.hasMistakes) {
      dispatch(addWrongToProgress());
    }
    else {
      dispatch(addSuccessToProgress());
    }
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
  return (dispatch) => {
    dispatch({
      type: SKIP_QUESTION
    });
    dispatch(addWrongToProgress());
  } 
}

export function setProgressStatus(status) {
  return {
    type: SET_PROGRESS_STATUS,
    payload: status
  };
}

export function addSuccessToProgress() {
  return {
    type: ADD_SUCCESS_TO_PROGRESS
  };
}

export function addWrongToProgress() {
  return {
    type: ADD_WRONG_TO_PROGRESS
  };
}

export function splitQuestions (quantity) {
  return {
    type: SPLIT_QUESTIONS,
    payload: quantity
  };
}

export function showResults(quiz, callback) {
  return (dispatch) => {
    dispatch({
      type: SHOW_RESULT,
      payload: null
    });
    callback();
  }
}