import React from 'react';
import PrepositionButton from './PrepositionButton';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.buttonsGroup = this.buttonsGroup.bind(this);
  }

  buttonsGroup(prepositions) {
    return prepositions.map((preposition) =>
      <PrepositionButton
        preposition={preposition} 
        key={preposition.id}
        onButtonClicked={(id) => { this.props.onButtonClicked(id); }} />
    ).reduce((prev, curr, i) => {
      if (i > 0) {
        prev.push(<span key={'span' + i}> / </span>); //each item should have a key
      }
      prev.push(curr);
      return prev;
    }, []);
  }

  render() {
    const className = 'answerGroup ' + this.props.className;

    return (
      <div className={className}>
        {this.buttonsGroup(this.props.prepositions)}
      </div>
    );
  }
}