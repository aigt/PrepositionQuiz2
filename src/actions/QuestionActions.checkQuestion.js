import {
  IS_AFTER_BE_SUBQUESTION, 
  COMPLEMENT_SUBQUESTION
} from '../constants';

const checkSubquestion = (subquestion) => {
  let hasMistakes = false;
  if(subquestion.type == IS_AFTER_BE_SUBQUESTION) {
    const newAfterBe = subquestion.isAfterBe;
    if(newAfterBe.isChecked) {
      if(!newAfterBe.isCorrect) {
        hasMistakes = true;
      }
    }
    else {
      if(newAfterBe.isCorrect) {
        newAfterBe.isMissed = true;
        hasMistakes = true;
      }
      else {
        newAfterBe.isAnswered = true;
      }
    }
    const newABSubquestion = Object.assign(subquestion);
    newABSubquestion.isAfterBe = newAfterBe;
    if(hasMistakes) {
      newABSubquestion.hasMistakes = true;
    }
    return newABSubquestion;
  }
  else if(subquestion.type == COMPLEMENT_SUBQUESTION) {
    const newPrepositions = subquestion.prepositions.map(preposition => {
      const newPreposition = preposition;
      if(newPreposition.isChecked) {
        if(!newPreposition.isCorrect) {
          hasMistakes = true;
        }
      }
      else {
        if(newPreposition.isCorrect) {
          newPreposition.isMissed = true;
          hasMistakes = true;
        }
        else {
          newPreposition.isAnswered = true;
        }
      }
      return newPreposition;
    })
    const newCSubquestion = Object.assign(subquestion);
    newCSubquestion.prepositions = newPrepositions;
    if(hasMistakes) {
      newCSubquestion.hasMistakes = true;
    }
    return newCSubquestion;
  }

  console.error('Unknown subquestion type in question:', subquestion)
  return subquestion;
}

export const checkQuestion = (question) => {
  let hasMistakes = false;
  const checkedQuestion = Object.assign(question);
  checkedQuestion.subquestions = question.subquestions.map(sq => {
    const checkedSubuestion = checkSubquestion(sq);
    if(checkedSubuestion.hasMistakes) {
      hasMistakes = true;
    }
    return checkedSubuestion;
  });
  if(hasMistakes) {
    checkedQuestion.hasMistakes = true;
  }
  return checkedQuestion;
}