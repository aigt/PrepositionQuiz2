import React from 'react';
import Answer from './Answer';

export default class Complement extends React.Component {
  render() {
    const complement = this.props.complement;

    return (
      <div className="complementWrapper">

        <div className="instructionAboveHeader">Click on right answers:</div>
        <div className="complement">
          <div className="answerHead">
            {complement.comment}
          </div>
          
          <div className="comment">
            <Answer prepositions={complement.prepositions} className=""/>
            <span className="commentLabel">{' ' + complement.text}</span>
          </div>
        </div>

      </div>

      // <div className="complement">
      //   <Answer prepositions={complement.prepositions} className="col-md-4"/>
      //   <span className="col-md-auto">{' ' + complement.text} ({complement.comment})</span>
      // </div>
    );
  }
}