import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import Quiz from './containers/Quiz.jsx';

const store = configureStore(browserHistory);

class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
      <div className="container app-container">
        <Quiz capacity="20" selected="2" />
      </div>
    </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));