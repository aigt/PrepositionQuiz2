import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className='container app-container'>
        {this.props.children}
      </div>
    )
  }
}