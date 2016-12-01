import React, { Component } from 'react';

import Header from './header';
import '../../style/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
