import React from 'react';

export default ({ onButtonClicked, preposition }) => {
  let className;
  if(preposition.isChecked) {
    if (preposition.isCorrect) {
      className = 'checkButton correctAnswer';
    }
    else {
      className = 'checkButton wrongAnswer';
    }
  }
  else {
    if (preposition.isMissed) {
      className = 'checkButton missedAnswer';
    }
    else if (preposition.isAnswered) {
      className = 'checkButton answeredAnswer';
    }
    else {
      className = 'checkButton';
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