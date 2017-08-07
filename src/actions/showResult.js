import {
  SHOW_RESULT
} from '../constants';

const countResult = (quiz) => {
  const questionsWithMistakes = quiz.questions.filter(question => question.hasMistakes);

  const result = {
    questionsWithMistakes,
    successedQuestionQuantity: quiz.questions.length - questionsWithMistakes.length,
    questionQuantity: quiz.questions.length,
    restartOptions: quiz.restartOptions,
  };

  return result;
}

export const showResult = (quiz, callback) => {
  const result = countResult(quiz);
  return (dispatch) => {
    dispatch({
      type: SHOW_RESULT,
      payload: result
    });
    callback();
  }
}