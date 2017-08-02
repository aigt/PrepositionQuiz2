import React, { Component } from 'react';
import QuizProgressBar from './QuizProgressBar';
import Question from './Question';
import { fetchQuiz } from '../actions/QuestionActions';
import { connect } from 'react-redux';

class AppForm extends Component {
  componentDidMount(){
    const { capacity, selected, fetchQuiz } = this.props;
    fetchQuiz({ capacity, selected });
  }

  render() {
    return (
      <div className="row app-form">
        <QuizProgressBar />
        <Question />
      </div>
    );
  }
}

export default connect(null, { fetchQuiz })(AppForm);