import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../Header';
import './App.css';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <div className="">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;