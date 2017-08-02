import {
  ANSWERING_MODE,
  CHECKED_MODE,
  CHECK_QUESTION, 
  NEXT_QUESTION
} from '../constants'

const initialState = {
  mode: ANSWERING_MODE
};

export default function progress(state = initialState, action) {
  switch (action.type) {
    case CHECK_QUESTION:
      return { mode: CHECKED_MODE }
    case NEXT_QUESTION:
      return { mode: ANSWERING_MODE }
    default:
      return state;
  }
}