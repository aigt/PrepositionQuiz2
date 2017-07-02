import React from 'react';
import Complement from './Complement';
import CheckButton from './CheckButton';
import QuizHeader from './QuizHeader';

export default class AppForm extends React.Component {
  render() {
    const afterBe = true;

    const complement = {
      text: 'smb/smth',
      comment: 'кем-то / чем-то',
      examples: [
        { text: 'I admire ${put-here} your spirit and your passion.' }
      ],
      prepositions: [
        { text: '-', isCorrect: true },
        { text: 'about' },
        { text: 'for' },
        { text: 'on' },
        { text: 'with' }
      ]
    };
    const complement2 = {
      text: 'smth',
      comment: 'за что-то',
      prepositions: [
        { text: 'about' },
        { text: 'by' },
        { text: 'for', isCorrect: true },
        { text: 'on' },
        { text: 'with' }
      ]
    };

    const listItems = complement.prepositions.map((preposition, i) =>
      <CheckButton label={preposition.text} isCorrectAnswer={preposition.isCorrect} key={i} />
    );

    const exampleItems = complement.prepositions.map((preposition, i) =>
      <li key={i}>{preposition.text}</li>
    );

    return (
      <div className="row">
        <QuizHeader />
        <h1 className="subjectWord">admire</h1>

        <div className="instructionAboveHeader">Click if it is used with verb to be:</div>
        <div className="complement">
          <CheckButton label="to&nbsp;be" isCorrectAnswer={afterBe} />
          {' '}
          admire
        </div>

        <Complement complement={complement} />
        <Complement complement={complement2} />

        <div className="buttons">

        </div>

      </div>
    );
  }
}