import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AfterBeSubquestion from '../components/AfterBeSubquestion';
import ComplementSubquestion from '../components/ComplementSubquestion';
import { bindActionCreators } from 'redux';
import { nextQuestion, skipQuestion, buttonClicked } from '../actions';
import { checkAnswers } from '../actions/checkAnswers';
import { fetchQuiz } from '../actions/fetchQuiz';
import { showResult } from '../actions/showResult';
import {
  ANSWERING_MODE,
  CHECKED_MODE,
  IS_AFTER_BE_SUBQUESTION, 
  COMPLEMENT_SUBQUESTION
} from '../constants';

class Question extends Component {
  constructor(props) {
    super(props);

    this.mapSubquestionIntoJSX = this.mapSubquestionIntoJSX.bind(this);
    this.setMainBtnProperties = this.setMainBtnProperties.bind(this);
  }

  mapSubquestionIntoJSX(subquestion, i, questionWord) {
    const { buttonClicked } = this.props;
    switch (subquestion.type) {
      case IS_AFTER_BE_SUBQUESTION:
        return <AfterBeSubquestion
          subquestion={subquestion}
          onButtonClicked={ (complementId, buttonId) => buttonClicked({ complementId, buttonId }) }
          word={questionWord}
          key={i}
        />;

      case COMPLEMENT_SUBQUESTION:
        return <ComplementSubquestion 
          subquestion={subquestion} 
          key={i} 
          onButtonClicked={ (complementId, buttonId) => buttonClicked({ complementId, buttonId }) }
        />;
    }

    console.error('Type of subquestion was\'t found. Subquestion:', subquestion);
    return null;
  }

  setMainBtnProperties() {
    let buttonLabel;
    let buttonAction;
    const { questions, index } = this.props.quiz;
    const question = questions[index];
    const { checkAnswers, nextQuestion, showResult, question: { mode } } = this.props;
    switch(mode) {
      case ANSWERING_MODE:
        buttonLabel = "Проверить";
        buttonAction = (event) => checkAnswers(question);
        break;
        
      case CHECKED_MODE:
        if(index < questions.length - 1) {
          buttonLabel = "Следующий"
          buttonAction = (event) => nextQuestion();
        }
        else {
          buttonLabel = "Смотреть результаты"
          buttonAction = (event) => {
            showResult(this.props.quiz, () => this.props.history.push('/result'));
          };
        }
        break;

      default:
        console.error('Unknown question mode:', this.props.question.mode);
    }
    return { buttonLabel, buttonAction };
  }

  render () {
    if((!this.props.quiz) )
      return <div>Loading...</div>;

    const { questions, index } = this.props.quiz;
    const question = questions[index];
    const word = question.word;

    const subquestions = question.subquestions.map(
      (subquestion, i) => this.mapSubquestionIntoJSX(subquestion, i, word)
    );

    const { buttonLabel, buttonAction } = this.setMainBtnProperties();
    const skipQuestion = this.props.skipQuestion;
    const skipQuestionClassName = this.props.question.mode == CHECKED_MODE ? 'hidden' : 'clickable';

    return (
      <div className="question">
        <h1 className="question-subject-word">{word}</h1>
        {subquestions}
        <div className="question-buttons-bar">
          <div className="btn-group dropup" role="group">
            <button className="btn btn-default" onClick={buttonAction}>{buttonLabel}</button>
            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><a onClick={skipQuestion} className={skipQuestionClassName}>Пропустить</a></li>
              <li><Link to="/">Стоп</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ question, quiz }) => {
  return {
    question,
    quiz
  };
};

export default connect(mapStateToProps, { 
  checkAnswers, 
  nextQuestion, 
  showResult, 
  skipQuestion, 
  buttonClicked 
})(Question);