export const countResult = (quiz) => {
  const questionsWithMistakes = quiz.questions.filter(question => question.hasMistakes);

  const result = {
    questionsWithMistakes,
    successedQuestionQuantity: quiz.questions.length - questionsWithMistakes.length,
    questionQuantity: quiz.questions.length
  };

  return result;
}