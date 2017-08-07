import {
  SPLIT_QUESTIONS
} from '../constants';

const initialState = {
  quantity: 15
};

export default function quizSetup(state = initialState, action) {
    switch (action.type) {
    case SPLIT_QUESTIONS:
      return { quantity: action.payload };

    default:
      return state;
  }
}