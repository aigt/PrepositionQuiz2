import { questions } from '../data/questions';
import {
  BUTTON_CLICKED,
  CHECK_QUESTION,
  NEXT_QUESTION, 
  FETCH_QUIZ
} from '../constants'

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