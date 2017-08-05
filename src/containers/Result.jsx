import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  IS_AFTER_BE_SUBQUESTION,
  COMPLEMENT_SUBQUESTION
} from '../constants'

class Result extends Component {
  constructor(props) {
    super(props);

    this.renderWordsToRepeat = this.renderWordsToRepeat.bind(this);
    this.renderComplements = this.renderComplements.bind(this);
  }

  renderComplements(subquestions) {
    const complements = subquestions
      .filter(subq => subq.type == COMPLEMENT_SUBQUESTION)
      .map((subq, i) => {
        const prepositions = subq.prepositions
          .filter(prep => prep.isCorrect)
          .reduce((prev, correctPrep, i) => {
            if (i > 0) {
              return `${prev} / ${correctPrep.text}`
            }
            else {
              return correctPrep.text;
            }
          }, ''); 

        return (
          <li key={i}>
            <b>{prepositions}</b> {` ${subq.text} (${subq.comment})`}
          </li>
        );
      });

    return (
      <ul>
        {complements}
      </ul>
    );
  }

  renderWordsToRepeat(questions) {
    return questions.map((question, i) => {
      let toBe;
      const isAfterBeSubquestion = question.subquestions.find(subq => subq.type == IS_AFTER_BE_SUBQUESTION);
      if(isAfterBeSubquestion.isAfterBe.isCorrect) {
        toBe = "to\xa0be"
      }
      else {
        toBe = "-"
      }

      return (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{toBe}</td>
          <td>{question.word}</td>
          <td>{this.renderComplements(question.subquestions)}</td>
        </tr>
      );
    });
  }

  renderRestartButton(restartOptions) {
    if(!restartOptions.mode) {
      return <div/>
    }

    switch(restartOptions.mode) {
      case 'all':
        const allTo = `/quiz/all`;
        return <Link className="btn btn-default" to={allTo}>Restart</Link>;

      case 'part':
        const partTo = `/quiz/part/${restartOptions.capacity}/${restartOptions.selected}`;
        return <Link className="btn btn-default" to={partTo}>Restart</Link>;

      case 'random':
        const randomTo = `/quiz/random/${restartOptions.capacity}`;
        return <Link className="btn btn-default" to={randomTo}>Restart</Link>;

      default:
        console.error('Unknown restartOptions mode:', restartOptions);
    }
  }

  render() {
    const { 
      successedQuestionQuantity,
      questionQuantity, 
      questionsWithMistakes, 
      restartOptions 
    } = this.props.result;
    const successPers = Math.round(successedQuestionQuantity * 100 / questionQuantity);
    return (
      <div className="row result app-form">
        <h1 className="question-subject-word">Quiz result</h1>
        <p>You answered {successedQuestionQuantity} of {questionQuantity} questions ({successPers}%)</p>

        <h4>Words to repeat</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>to&nbsp;be</th>
                <th>word</th>
                <th>complements</th>
              </tr>
            </thead>
            <tbody>
              {this.renderWordsToRepeat(questionsWithMistakes)}
            </tbody>
          </table>
        </div>

        <div className="question-buttons-bar">
          <Link className="btn btn-default" to="/">Ок</Link>
          {' '}
          {this.renderRestartButton(restartOptions)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ result }) => { return { result }; }

export default connect(mapStateToProps)(Result);