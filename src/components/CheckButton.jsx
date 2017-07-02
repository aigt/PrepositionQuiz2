import React from 'react';

export default class CheckButton extends React.Component {
  constructor(props) {
    super(props);
    if (props.isCorrectAnswer) {
      this.answerStyle = 'checkButton correctAnswer';//btn btn-sm btn-success text-success
    }
    else {
      this.answerStyle = 'checkButton wrongAnswer';//btn btn-sm btn-danger text-danger
    }
    this.state = { buttonStyle: 'checkButton' };//btn btn-sm btn-default text-default

    this.handleClick = this.handleClick.bind(this);
    this.isPressed = false;
  }

  handleClick(e) {
    if (!this.isPressed) {
      this.setState({ buttonStyle: this.answerStyle });
      this.isPressed = true;
    }
  }

  render() {
    return (
      //<div className='checkButtonWrapper'>
        <a onClick={this.handleClick} className={this.state.buttonStyle}>
            {this.props.label}
        </a>
      //</div>
    );
  }
}