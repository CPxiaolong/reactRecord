import React, { Component } from 'react';
import logo from '../asset/img/logo.svg';
import '../asset/css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
