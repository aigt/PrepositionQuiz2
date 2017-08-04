import {
  SHOW_RESULT
} from '../constants';

const initialState = {
  questionsWithMistakes: [],
  successedQuestionQuantity: 0,
  questionQuantity: 0,
  restartOptions: {}
};

export default function result(state = initialState, action) {
  switch(action.type) {
    case SHOW_RESULT:
      return action.payload;
    
    default: 
      return state;
  }
}