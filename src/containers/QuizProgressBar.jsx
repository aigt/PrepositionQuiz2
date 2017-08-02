import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuizProgressBar extends Component {
  render() {
    const success = this.props.progress.success;
    const wrong = this.props.progress.wrong;
    const total = this.props.progress.total;
    const successPers = Math.round(success * 100 / total);
    const wrongPers = Math.round(wrong * 100 / total);

    return (
        <div className="quiz-progress-bar">
          <div className="static-part">
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{'   '}
            {success + wrong} of {total} questions
          </div>
          <div className="q-progress">
            <div className="q-bar-success" style={{ width: `${successPers}%`, minWidth: '3em' }}>
              {successPers}%
            </div>
            <div className="q-bar-wrong" style={{ width: `${wrongPers}%`, minWidth: '3em' }}>
              {wrongPers}%
            </div>
            <div className="q-bar-gray"></div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    progress: state.progress
  };
}

export default connect(mapStateToProps)(QuizProgressBar);