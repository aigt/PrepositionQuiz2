import React from 'react';

export default ({ onButtonClicked, preposition }) => {
  let className;
  if(preposition.isChecked) {
    if (preposition.isCorrect) {
      className = 'check-button answer-correct';
    }
    else {
      className = 'check-button answer-wrong';
    }
  }
  else {
    if (preposition.isMissed) {
      className = 'check-button answer-missed';
    }
    else if (preposition.isAnswered) {
      className = 'check-button answer-answered';
    }
    else {
      className = 'check-button';
    }
    
  }

  return (
    <a
      onClick={ event => { if(!(preposition.isChecked||preposition.isMissed||preposition.isAnswered)) {onButtonClicked(preposition.id);} } } 
      className={className}>
      {preposition.text}
    </a>
  );
}