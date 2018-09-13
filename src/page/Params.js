import React, { Component } from 'react';
import '../asset/css/App.css';

class Error extends Component {
    render() {
        return (
            <div className="App">
                <p>参数测试页面</p>
                <p>你输入的参数是 {this.props.params.paramName ? this.props.params.paramName : '无参数'}</p>
            </div>
        );
    }
}

export default Error;
