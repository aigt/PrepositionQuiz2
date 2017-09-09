import {
  IS_AFTER_BE_SUBQUESTION,
  COMPLEMENT_SUBQUESTION,
  FETCH_QUIZ, 
  BUTTON_CLICKED, 
  CHECK_ANSWERS, 
  SKIP_QUESTION, 
  NEXT_QUESTION
} from '../constants';

const mapSqOnBtnClick = (subquestion, complementId, buttonId) => {
  if(subquestion.id == complementId) {
    switch(subquestion.type) {
      case IS_AFTER_BE_SUBQUESTION:
        const newAfterBe = subquestion.isAfterBe;
        newAfterBe.isChecked = true;
        const newABSubquestion = subquestion;
        newABSubquestion.isAfterBe = newAfterBe;
        return newABSubquestion;
        
      case COMPLEMENT_SUBQUESTION:
        const newPrepositions = subquestion.prepositions.map(p => {
          if(p.id == buttonId) {
            const np = p;
            np.isChecked = true;
            return np;
          }
          return p;
        })
        const newCSubquestion = subquestion;
        newCSubquestion.prepositions = newPrepositions;
        return newCSubquestion;
    }
  }
  return subquestion;
}

export default function quiz(state = null, action) {
  switch(action.type) {
    case FETCH_QUIZ:
      const { capacity , questions, restartOptions } = action.payload;
      const newState = {
        capacity,
        index: 0,
        questions,
        restartOptions
      };
      return newState;

    case NEXT_QUESTION:
    case SKIP_QUESTION:
      if(state.index + 1 < state.capacity) {
        const nextState = Object.assign({}, state);
        nextState.index = state.index + 1;
        return nextState;
      }
      return state;

    case BUTTON_CLICKED:
      const { complementId, buttonId } = action.payload;
      const onBtnClickState = Object.assign({}, state);
      onBtnClickState.questions[state.index].subquestions = state.questions[state.index].subquestions.map(sq => mapSqOnBtnClick(sq, complementId, buttonId));
      return onBtnClickState;

    case CHECK_ANSWERS:
      const onCheckState = state;
      onCheckState.questions[state.index] = action.payload; //checked question in payload
      return onCheckState;

    default: 
      return state;
  }
}