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

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
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