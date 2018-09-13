import React, { Component } from 'react';
import '../asset/css/App.css';

class GetParams extends Component {
    static defaultProps = {
        age: '12',
        page: 9
    }


    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.refsClick = this.refsClick.bind(this)
    }

    refsClick() {
        console.log(this.myRef.current, 'myref')
    }

    render() {
        return (
            <div className="App">
                <button ref={this.myRef} onClick={this.refsClick}>点击</button>
            </div>
        );
    }
}

export default GetParams;