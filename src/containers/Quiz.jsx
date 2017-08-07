import React, { Component } from 'react';
import QuizProgressBar from './QuizProgressBar';
import Question from './Question';
import { fetchQuiz } from '../actions/fetchQuiz';
import { connect } from 'react-redux';

class Quiz extends Component {
  componentDidMount(){
    const { match: { params: { mode, capacity, selected }}, fetchQuiz } = this.props;
    fetchQuiz({ mode, capacity, selected });
  }

  render() {
    return (
      <div className="row quiz app-form">
        <QuizProgressBar />
        <Question history={this.props.history} />
      </div>
    );
  }
}

export default connect(null, { fetchQuiz })(Quiz);