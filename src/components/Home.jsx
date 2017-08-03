import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizSetup from '../containers/QuizSetup';
import { questions } from '../data/questions';

export default class Home extends Component {
  render() {
    const questionsQuantity = questions.length;
    return (
      <div className='row home app-form'>
        <h1 className="question-subject-word">Hello, friend!</h1>
        <p>Make your choice:</p>
        <div>
          <div className="subquestion">
            <h4 className="list-group-item-heading">All questions</h4>
            <Link className="btn btn-default btn-block" to='/quiz/all'>Start quiz with all {questionsQuantity} questions</Link>
          </div>
          <div className="subquestion">
            <h4 className="list-group-item-heading">Divide into subquizes with defined number of questions</h4>
            <QuizSetup />
          </div>
          <div className="subquestion">
            <h4 className="list-group-item-heading">Answers</h4>
            <Link className="btn btn-default btn-block" to='/answers'>See all answers</Link>
          </div>
        </div>
      </div>
    )
  }
}