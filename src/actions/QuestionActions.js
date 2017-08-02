import { questions } from '../data/questions';

export const BUTTON_CLICKED = 'BUTTON_CLICKED';
export const CHECK_QUESTION = 'CHECK_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const FETCH_QUIZ = 'FETCH_QUIZ';

export function buttonClicked(id) {
  return {
    type: BUTTON_CLICKED,
    payload: id
  };
}

export function checkQuestion() {
  return {
    type: CHECK_QUESTION,
    payload: null
  };
}

export function nextQuestion() {
  return {
    type: NEXT_QUESTION
  };
}

export function fetchQuiz(quizSettings) {
  const quiz = {
    quizSettings,
    questions
  };

  return {
    type: FETCH_QUIZ,
    payload: quiz
  }
}