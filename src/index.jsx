import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import Quiz from './containers/Quiz.jsx';
import Home from './components/Home.jsx';
import App from './components/App.jsx';

const store = configureStore(browserHistory);

class Index extends React.Component {
  render () {
    return (
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='quiz/:mode' component={Quiz} />
            <Route path='quiz/:mode/:capacity' component={Quiz} />
            <Route path='quiz/:mode/:capacity/:selected' component={Quiz} />
          </Route>
        </Router>
    </Provider>

    );
  }
}

render(<Index />, document.getElementById('app'));