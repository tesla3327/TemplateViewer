import React, { Component } from 'react';
import './App.css';
import TemplateViewer from './TemplateViewer';

const template = "Hello there <%- name %>.";

class App extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  render() {
    return (
      <div>
        <div>
          <label>Name:</label>
          <input value={ this.state.name } onChange={ (e) => this.setState({ name: e.target.value })} />
        </div>
        <TemplateViewer
          values={ this.state }
          template={ template }
        />
      </div>
    );
  }
}

export default App;
