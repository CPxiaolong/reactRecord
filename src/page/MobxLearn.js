import React, { Component } from 'react';
import { observable, computed, autorun, when, reaction, action } from 'mobx';
import { observer } from 'mobx-react';
import logo from '../asset/img/logo.svg';

class Store {
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();

    @observable string = "hello";
    @observable number = 12;
    @observable bool = false;
    @observable func = function () {
        return 200;
    }
    @computed get mixed() {
        return this.string + this.number;
    }
    @action bar() { //用action 可以值多次修改,试图只更新一次
        this.number = 1;
        this.string = "change string";
    }
}


class MobeTest extends Component {
    constructor() {
        super()
        let stroe = new Store();
        //	autorun(() => { //每次里面stroe的值有变化时,都会调用这个函数(最开始的时候会调用一次)
        //		console.log(stroe.number	)
        //	})
        //	
        //	when(()=>stroe.bool,()=>console.log("it is true")) //当前面的值改变的时候 后面的方法运行 前面的方法只验证返回值的真假性
        //	window.setTimeout(function(){
        //		stroe.bool = true;
        //	},1500)
        //	stroe.number = 20;
        reaction(() => [stroe.string, stroe.number], arr => console.log(arr.join("/")))
        window.setTimeout(function () {
            stroe.bar()
        }, 1500)
        console.log(stroe.number, "number")
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Mobx</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default MobeTest;
