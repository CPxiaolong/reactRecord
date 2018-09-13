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
        this.refsClick = this.refsClick.bind(this);
        // this.getP = this.getP.bind(this);
    }

    refsClick() {
        console.log(this.myRef.current, 'myref');
    }

    getP() {
        return <p>这是一个段落</p>;
    }

    render() {
        return (
            <div className="App">
                { this.getP() }
                <button ref={this.myRef} onClick={this.refsClick}>点击</button>
            </div>
        );
    }
}

export default GetParams;