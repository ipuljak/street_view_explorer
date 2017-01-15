import React, { Component } from 'react';

import Header from '../Header';
import './App.css';

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="padded-top">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;