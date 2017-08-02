import {
  SET_PROGRESS_STATUS
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

    default:
      return state;
  }
}