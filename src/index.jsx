import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// hashHistory instead of browserHistory because of my free hosting
import { HashRouter as Router, Route } from 'react-router-dom';
import { hashHistory } from 'react-router';
import configureStore from './store/configureStore'
import App from './components/App.jsx';

const store = configureStore(hashHistory);

class Index extends React.Component {
  render () {
    console.log(hashHistory)
    return (
    <Provider store={store}>
        <Router history={hashHistory} >
          <Route path='/' component={App} />
        </Router>
    </Provider>
    );
  }
}

render(<Index />, document.getElementById('app'));