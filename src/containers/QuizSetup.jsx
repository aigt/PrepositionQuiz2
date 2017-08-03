import React, { Component } from 'react';
import { questions } from '../data/questions';
import { splitQuestions } from '../actions/QuestionActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuizSetup extends Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderButtons() {
    const questionPerQuiz = this.props.quizSetup.quantity;
    const questionsQuantity = questions.length;
    const quizQuantity = Math.ceil(questionsQuantity / questionPerQuiz);
    if(quizQuantity > 1) {
      const buttons = [];
      for(let i = 1; i <= quizQuantity; i++) {
        const linkTo = `/quiz/part/${questionPerQuiz}/${i}`;
        buttons.push(<Link className="btn btn-default" to={linkTo} key={i}>Quiz #{i}</Link>);
      }
      const randomLinkTo = `/quiz/random/${questionPerQuiz}`;
      buttons.push(<Link className="btn btn-default" to={randomLinkTo} key="random">Random {questionPerQuiz} questions</Link>)
      return buttons;
    }
    else {
      return <div>You can start all questions by pressing button above</div>;
    }
  }

  handleChange(event) {
    const questionsQuantity = questions.length;
    let quantity = event.target.value;
    if(quantity < 2) {
      quantity = 2;
    }
    if(quantity > questionsQuantity - 1) {
      quantity = quantity;
    }
    this.props.splitQuestions(quantity);
  }

  render() {
    const questionsQuantity = questions.length;
    const { quantity } = this.props.quizSetup;
    return (
      <div className="quiz-setup">
        <div className="input-group">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Questions per quiz" 
            aria-describedby="basic-addon1" 
            min={2}
            max={questionsQuantity - 1}
            value={quantity}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Divide!</button>
          </span>
        </div>
        <div className="btn-toolbar margin-top-10" role="toolbar">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quizSetup }) => {
  return {
    quizSetup
  }
}

export default connect(mapStateToProps, { splitQuestions })(QuizSetup);