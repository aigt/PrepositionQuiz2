import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// HashRouter instead of browserHistory because of my free hosting
import { HashRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore'
import App from './components/App.jsx';

const store = configureStore();

class Index extends React.Component {
  render () {
    return (
    <Provider store={store}>
        <Router >
          <Route path='/' component={App} />
        </Router>
    </Provider>
    );
  }
}

render(<Index />, document.getElementById('app'));