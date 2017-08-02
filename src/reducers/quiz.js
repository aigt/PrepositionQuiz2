import { FETCH_QUIZ, BUTTON_CLICKED, CHECK_QUESTION, NEXT_QUESTION } from '../actions/QuestionActions';

export const IS_AFTER_BE_SUBQUESTION = 1;
export const COMPLEMENT_SUBQUESTION = 2;

const mapAfterBeQuestion = (question) => {
  return {
    id: 1,
    type: IS_AFTER_BE_SUBQUESTION,
    isAfterBe: { text: 'to be', isCorrect: question.afterBe, id: 1 }
  };
}

const mapPrepositions = (prepositions) => {
  return prepositions.map((preposition, i) => {
    return {
      id: i + 1,
      text: preposition.text, 
      isCorrect: preposition.isCorrect, 
      isChecked: false 
    };
  });
}

const mapComplement = (complement, id) => {
  return {
      id,
      type: COMPLEMENT_SUBQUESTION,
      text: complement.text,
      comment: complement.comment,
      prepositions: mapPrepositions(complement.prepositions)
    }
}

const mapSubquestions = (question) => {
  const afterBeQuestion = mapAfterBeQuestion(question);
  const complements = question.complements.map((complement, i) => {
    const mappedComplement = mapComplement(complement, i + 2);
    return mappedComplement;
  });

  return [ afterBeQuestion, ...complements ];
}

/**
 * returns selected array of processed questions
 * 
 * @param {integer} capacity is how many questions in quiz
 * @param {integer} selected if all questions are divided by capacity, we have
 * a number of quizes, selected is an index in that array, starts with 1
 */
const getQuestions = (capacity, selected, questions) => {
    const begin = capacity * (selected - 1)
    const end = capacity * selected
    const quizQuestions = questions
      .slice(begin, end)
      .map((question, i) => {
        const newQuestion = {
          word: question.text,
          subquestions: mapSubquestions(question),
        }
        return newQuestion;
      });
    return quizQuestions;
}

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

const mapSqOnCheck = (subquestion) => {
  if(subquestion.type == IS_AFTER_BE_SUBQUESTION) {
    const newAfterBe = subquestion.isAfterBe;
    if(!newAfterBe.isChecked) {   //All checked are processed after they were checked
      if(newAfterBe.isCorrect) {
        newAfterBe.isMissed = true;
      }
      else {
        newAfterBe.isAnswered = true;
      }
    }
    const newABSubquestion = subquestion;
    newABSubquestion.isAfterBe = newAfterBe;
    return newABSubquestion;
  }
  else if(subquestion.type == COMPLEMENT_SUBQUESTION) {
    const newPrepositions = subquestion.prepositions.map(preposition => {
      const newPreposition = preposition;
      if(!newPreposition.isChecked) {   //All checked are processed after they were checked
        if(newPreposition.isCorrect) {
          newPreposition.isMissed = true;
        }
        else {
          newPreposition.isAnswered = true;
        }
      }
      return newPreposition;
    })
    const newCSubquestion = subquestion;
    newCSubquestion.prepositions = newPrepositions;
    return newCSubquestion;
  }
  return subquestion;
}

export default function quiz(state = null, action) {
  switch(action.type) {
    case FETCH_QUIZ:
      const { quizSettings: { capacity, selected }, questions } = action.payload;
      const quizQuestions = getQuestions(capacity, selected, questions);
      const newState = {
        capacity,
        index: 0,
        questions: quizQuestions
      };
      return newState;

    case NEXT_QUESTION:
      const nextState = state;
      nextState.index = state.index + 1;
      return nextState;

    case BUTTON_CLICKED:
      const { complementId, buttonId } = action.payload;
      const onBtnClickState = Object.assign({}, state );
      onBtnClickState.questions[state.index].subquestions = state.questions[state.index].subquestions.map(sq => mapSqOnBtnClick(sq, complementId, buttonId));
      return onBtnClickState;

    case CHECK_QUESTION:
      const onCheckState = state;
      onCheckState.questions[state.index].subquestions = state.questions[state.index].subquestions.map(sq => mapSqOnCheck(sq));
      return onCheckState;

    default: 
      return state;
  }
}