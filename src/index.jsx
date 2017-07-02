import React from 'react';
import { render } from 'react-dom';
import AppForm from './components/AppForm.jsx';

class App extends React.Component {
  render () {
    return (
    <div className="container app-container">
      <AppForm />
    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));