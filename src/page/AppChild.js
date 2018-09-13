import React, { Component } from 'react';
import GetParams from '../component/GetParams';
import '../asset/css/App.css';
import AnyTest from '../component/AnyTest';

class AppChild extends Component {
    render() {
        let params = {
            name: '小龙',
            age: '26'
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">这是app的子页面</h1>
                    <GetParams  {...params} />
                    <AnyTest />
                </header>
            </div>
        );
    }
}

export default AppChild;
