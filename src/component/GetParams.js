import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../asset/css/App.css';

class GetParams extends Component {
    static defaultProps = {
        age: '12',
        page: 9
    }

    static propTypes = {
        name: PropTypes.string
    }

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className="App">
                <p>参数测试</p>
            </div>
        );
    }
}

export default GetParams;