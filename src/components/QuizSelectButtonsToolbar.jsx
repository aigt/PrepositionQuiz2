import React, { Component } from 'react';
import { questions } from '../data/questions';
import { Link } from 'react-router-dom';

const renderButtons = (questionPerQuiz) => {
  const questionsQuantity = questions.length;
  const quizQuantity = Math.ceil(questionsQuantity / questionPerQuiz);

  if(quizQuantity > 1) {
    const buttons = [];
    for(let i = 1; i <= quizQuantity; i++) {
      const linkTo = `/quiz/part/${questionPerQuiz}/${i}`;
      /* if in quiz only 1 word, name this quiz by this word */
      let quizName = questionPerQuiz > 1 ? `Start quiz #${i}` : questions[i-1].text;

      buttons.push(<Link className="btn btn-default" to={linkTo} key={i}>{quizName}</Link>);
    }
    const randomLinkTo = `/quiz/random/${questionPerQuiz}`;
    buttons.push(<Link className="btn btn-default" to={randomLinkTo} key="random">Start random {questionPerQuiz} questions</Link>);
    return buttons;
  }
  else {
    return <div>You can start all questions by pressing button above.</div>;
  }
}

const QuizSelectButtonToolbar = ({ questionPerQuiz }) => {
  const buttons = renderButtons(questionPerQuiz);

  return (
    <div className="btn-toolbar margin-top-10" role="toolbar">
      {buttons}
    </div>
  );
}

export default QuizSelectButtonToolbar;