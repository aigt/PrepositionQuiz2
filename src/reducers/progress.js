import {
  SET_PROGRESS_STATUS,
  ADD_SUCCESS_TO_PROGRESS,
  ADD_WRONG_TO_PROGRESS
} from '../constants';

const initialState = {
  success: 0,
  wrong: 0,
  total: 100
};

export default function progress(state = initialState, action) {
    switch (action.type) {
    case SET_PROGRESS_STATUS:
      return action.payload;

    case ADD_SUCCESS_TO_PROGRESS:
      return {
        success: state.success + 1,
        wrong: state.wrong,
        total: state.total
      };

    case ADD_WRONG_TO_PROGRESS:
      return {
        success: state.success,
        wrong: state.wrong + 1,
        total: state.total
      };

    default:
      return state;
  }
}