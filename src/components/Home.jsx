import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className='row home app-form'>
        <h1 className="question-subject-word">Hello, friend!</h1>
        <p>Choose your option:</p>
        <ul>
          <li><Link to='/quiz/all'>Start quiz with all questions</Link></li>
          <li><Link to='/quiz/part/20/2'>Start quiz</Link></li>
          <li><Link to='/quiz/random/20'>Start random 20 questions</Link></li>
          <li><Link to='/answers'>See all answers</Link></li>
        </ul>
      </div>
    )
  }
}