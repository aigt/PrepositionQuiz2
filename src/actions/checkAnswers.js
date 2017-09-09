import { addSuccessToProgress, addWrongToProgress } from '.';
import {
  CHECK_ANSWERS,
  IS_AFTER_BE_SUBQUESTION, 
  COMPLEMENT_SUBQUESTION
} from '../constants';

const checkAfterBeSubquestion = (subquestion) => {
  const newABSubquestion = Object.assign({}, subquestion);

  if(subquestion.isAfterBe.isChecked) {
    if(!subquestion.isAfterBe.isCorrect) {
      newABSubquestion.hasMistakes = true;
    }
  }
  else {
    if(subquestion.isAfterBe.isCorrect) {
      subquestion.isAfterBe.isMissed = true;
      newABSubquestion.hasMistakes = true;
    }
    else {
      subquestion.isAfterBe.isAnswered = true;
    }
  }

  return newABSubquestion;
}

const mapPreposition = (preposition) => {
    const newPreposition = Object.assign({}, preposition);

    if(newPreposition.isChecked) {
      if(!newPreposition.isCorrect) {
        newPreposition.hasMistakes = true;
      }
    }
    else {
      if(newPreposition.isCorrect) {
        newPreposition.isMissed = true;
        newPreposition.hasMistakes = true;
      }
      else {
        newPreposition.isAnswered = true;
      }
    }

    return newPreposition;
}

const checkComplementSubquestion = (subquestion) => {
  const newCSubquestion = Object.assign({}, subquestion);
  const newPrepositions = newCSubquestion.prepositions.map(preposition => {
    const newPreposition = mapPreposition(preposition);
    if(newPreposition.hasMistakes) {
      newCSubquestion.hasMistakes = true;
    }
    return newPreposition;
  });
  newCSubquestion.prepositions = newPrepositions;

  return newCSubquestion;
}

const checkSubquestion = (subquestion) => {
  let hasMistakes = false;

  switch(subquestion.type) {
    case IS_AFTER_BE_SUBQUESTION:
      return checkAfterBeSubquestion(subquestion);

    case COMPLEMENT_SUBQUESTION:
      return checkComplementSubquestion(subquestion);

    default:
      console.error('Unknown subquestion type in subquestion:', subquestion)
  }
}

/**
 * 
 * @param {*} questionWithAnswers 
 */
const _checkAnswers = (questionWithAnswers) => {
  const checkedQuestion = Object.assign({}, questionWithAnswers);

  checkedQuestion.subquestions = questionWithAnswers.subquestions.map(sq => {
    const checkedSubuestion = checkSubquestion(sq);
    if(checkedSubuestion.hasMistakes) {
      checkedQuestion.hasMistakes = true;
    }
    return checkedSubuestion;
  });

  return checkedQuestion;
}

/**
 * Dispatches result of user answer and changing progress status
 * @param {*} questionWithAnswers 
 */
export const checkAnswers = (questionWithAnswers) => {

  // checks answers on question
  const checkedQuestion = _checkAnswers(questionWithAnswers);
  
  return (dispatch) => {

    dispatch({
      type: CHECK_ANSWERS,
      payload: checkedQuestion
    });

    // changing progress status to display in progrress bar
    if(checkedQuestion.hasMistakes) {
      dispatch(addWrongToProgress());
    }
    else {
      dispatch(addSuccessToProgress());
    }

  };
}