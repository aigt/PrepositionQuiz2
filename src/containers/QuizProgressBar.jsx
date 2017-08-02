import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuizProgressBar extends Component {
  render() {
    const success = this.props.progress.success;
    const wrong = this.props.progress.wrong;
    const total = this.props.progress.total;
    const successPers = Math.round(success * 100 / total);
    const wrongPers = Math.round(wrong * 100 / total);
    let successClassName, wrongClassName;
    if(successPers > 0) {
      successClassName = "q-bar-success";
    }
    else {
      successClassName = "q-bar-success hidden";
    }
    if(wrongPers > 0) {
      wrongClassName = "q-bar-wrong";
    }
    else {
      wrongClassName = "q-bar-wrong hidden";
    }

    return (
        <div className="quiz-progress-bar">
          <div className="static-part">
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{'   '}
            {success + wrong} of {total} questions
          </div>
          <div className="q-progress">
            <div className={successClassName} style={{ width: `${successPers}%`, minWidth: '3em' }}>
              {successPers}%
            </div>
            <div className={wrongClassName} style={{ width: `${wrongPers}%`, minWidth: '3em' }}>
              {wrongPers}%
            </div>
            <div className="q-bar-gray">&nbsp;</div>
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