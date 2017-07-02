import React from 'react';

export default class Complement extends React.Component {
  render() {
    const complement = this.props.complement;

    return (
        <div className="quizHeader">
          <div className="staticPart">
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle" aria-hidden="true"></i>{' '}
            <i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{'   '}
            1 of 20 questions
          </div>
          <div className="q-progress">
            <div className="q-bar-success" style={{ width: '20%', minWidth: '3em' }}>
              20%
            </div>
            <div className="q-bar-wrong" style={{ width: '0%', minWidth: '3em' }}>
              0%
            </div>
            <div className="q-bar-gray"></div>
          </div>
        </div>
    );
  }
}