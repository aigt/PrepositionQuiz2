import React from 'react';
import CheckButton from './CheckButton';

export default class Answer extends React.Component {
  render() {
    const prepositions = this.props.prepositions;
    const listItems = prepositions.map((preposition, i) =>
       <CheckButton label={preposition.text} isCorrectAnswer={preposition.isCorrect} key={i} />
    ).reduce((prev, curr, i) => {
      if (i > 0) {
        prev.push(<span key={'span' + i}> / </span>); //each item should have a key
      }
      prev.push(curr);
      return prev;
    }, []);

    const className = 'answerGroup ' + this.props.className;

    return (
      <div className={className}>{listItems}</div>
    );
  }
}