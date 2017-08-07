import { questions } from '../data/questions';
import _ from 'lodash';
import {
  BUTTON_CLICKED,
  NEXT_QUESTION, 
  FETCH_QUIZ,
  SET_PROGRESS_STATUS,
  SPLIT_QUESTIONS,
  ADD_SUCCESS_TO_PROGRESS,
  ADD_WRONG_TO_PROGRESS,
  SKIP_QUESTION
} from '../constants';

export const buttonClicked = (id) => {
  return {
    type: BUTTON_CLICKED,
    payload: id
  };
}

export const nextQuestion = () =>{
  return {
    type: NEXT_QUESTION
  };
}

export const fetchQuiz = ({ mode, capacity, selected }) => {
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

export const skipQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: SKIP_QUESTION
    });
    dispatch(addWrongToProgress());
  } 
}

export const setProgressStatus = (status) => {
  return {
    type: SET_PROGRESS_STATUS,
    payload: status
  };
}

export const addSuccessToProgress = () => {
  return {
    type: ADD_SUCCESS_TO_PROGRESS
  };
}

export const addWrongToProgress = () => {
  return {
    type: ADD_WRONG_TO_PROGRESS
  };
}

export const splitQuestions = (quantity) => {
  return {
    type: SPLIT_QUESTIONS,
    payload: quantity
  };
}