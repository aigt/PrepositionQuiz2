import React, { Component } from 'react';
import { questions } from '../data/questions';
import { splitQuestions } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizSelectButtonsToolbar from '../components/QuizSelectButtonsToolbar'

class QuizSetup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const questionsQuantity = questions.length;
    let quantity = event.target.value;
    if(quantity < 1) {
      quantity = 1;
    }
    if(quantity > questionsQuantity) {
      quantity = questionsQuantity;
    }
    this.props.splitQuestions(quantity);
  }

  render() {
    const questionsQuantity = questions.length;
    const { quantity } = this.props.quizSetup;

    return (
      <div className="quiz-setup">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Questions per quiz:</span>
          <input 
            type="number" 
            className="form-control" 
            placeholder="Questions per quiz" 
            aria-describedby="basic-addon1" 
            min={1}
            max={questionsQuantity}
            value={quantity}
            onChange={this.handleChange}
          />
        </div>
        <QuizSelectButtonsToolbar questionPerQuiz={quantity} />
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