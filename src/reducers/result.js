import {
  SHOW_RESULT
} from '../constants';

const initialState = {
  questionsWithMistakes: [],
  successedQuestionQuantity: 0,
  questionQuantity: 0
};

export default function result(state = initialState, action) {
  switch(action.type) {
    case SHOW_RESULT:
      return {
        questionsWithMistakes: action.payload.questionsWithMistakes,
        successedQuestionQuantity: action.payload.successedQuestionQuantity,
        questionQuantity: action.payload.questionQuantity
      }
    
    default: 
      return state;
  }
}