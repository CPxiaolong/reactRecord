import React,{Component} from 'react';
import {obserble,action} from 'mobx';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

class Store {
	cache = {queue: []} 
}
const store = new Store();

class Bar extends Component {
	static propTypes = {
		queue: PropTypes.array
	};
	render(){
		const queue = this.props.pueue;
		
		return <span>{queue.length}</span>
	}
}
class Foo extends Component {
	static propTypes = {
		cache: PropTypes.object
	};
	
	render() {
		const cache = this.props.cache;
		
		return <div><Bar queue = {cache.queue}/></div>;
	}
}

