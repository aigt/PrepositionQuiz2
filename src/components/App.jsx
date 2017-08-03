import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from '../containers/Quiz.jsx';
import Home from '../components/Home.jsx';

export default class App extends Component {
  render() {
    console.log('this.props.history',this.props.history)
    return (
      <div className='container app-container'>
            <Switch>

              <Route path='/quiz/:mode/:capacity/:selected' component={Quiz} />
              <Route path='/quiz/:mode/:capacity' component={Quiz} />
              <Route path='/quiz/:mode' component={Quiz} />
              <Route path='/' component={Home} />
            </Switch>
      </div>
    )
  }
}