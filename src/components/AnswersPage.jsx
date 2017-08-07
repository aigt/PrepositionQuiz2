import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { questions } from '../data/questions';

export default class AnswersPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = { filter: '' };

    this.renderWordsTable = this.renderWordsTable.bind(this);
    this.renderComplements = this.renderComplements.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  renderComplements(complements) {
    const newComplements = complements
      .map((comp, i) => {
        const prepositions = comp.prepositions
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
            <b>{prepositions}</b> {` ${comp.text} (${comp.comment})`}
          </li>
        );
      });

    return (
      <ul>
        {newComplements}
      </ul>
    );
  }

  renderWordsTable(questions) {
    return questions.map((question, i) => {
      let toBe;
      if(question.afterBe) {
        toBe = "to\xa0be";
      }
      else {
        toBe = "-";
      }

      return (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{toBe}</td>
          <td>{question.text}</td>
          <td>{this.renderComplements(question.complements)}</td>
        </tr>
      );
    });
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const questionsToShow = questions.filter(question => question.text.includes(this.state.filter));
    return (
      <div className="row result app-form">
        <h1 className="question-subject-word">Answers</h1>

        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Filter words:</span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="filter" 
            aria-describedby="basic-addon1"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>

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
              {this.renderWordsTable(questionsToShow)}
            </tbody>
          </table>
        </div>
        
        <div className="question-buttons-bar">
          <Link className="btn btn-default" to="/">Ок</Link>
        </div>
      </div>
    );
  }
}