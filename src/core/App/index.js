import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../Header';
import './App.css';

// Compatibility with MaterialUI clicks
injectTapEventPlugin();

/**
 *  Main App Component
 */
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;