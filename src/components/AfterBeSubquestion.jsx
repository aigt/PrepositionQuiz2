import React, { Component } from 'react';
import PrepositionButton from './PrepositionButton';

const AfterBeSubquestion = ({ word, subquestion, onButtonClicked }) => {
  return (
    <div className="subquestion">
      <div className="subquestion-instruction">Click if it is used with verb to be:</div>
      <div className="subquestion-content">
        <PrepositionButton
          preposition={subquestion.isAfterBe}
          onButtonClicked={(buttonId) => { onButtonClicked(subquestion.id, buttonId); }} />
        {` ${word}`}
      </div>
    </div>
  );
}

export default AfterBeSubquestion;