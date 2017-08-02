import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import AppForm from './containers/AppForm.jsx';

const store = configureStore(browserHistory);

class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
      <div className="container app-container">
        <AppForm capacity="20" selected="2" />
      </div>
    </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));