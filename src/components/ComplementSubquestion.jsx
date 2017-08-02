import React from 'react';
import Answer from './Answer';

export default ({ subquestion, onButtonClicked }) => {
  return (
    <div className="subquestion">
      <div className="subquestion-content">
        <div className="answerHead">
          {subquestion.comment}
        </div>
        <div className="subquestion-instruction">Click on right prepositions:</div>
        <div className="comment">
          <Answer
            prepositions={subquestion.prepositions} 
            onButtonClicked={buttonId => onButtonClicked(subquestion.id, buttonId)} />
          <span className="commentLabel">
            {` ${subquestion.text}`}
          </span>
        </div>
      </div>
    </div>
  );
}