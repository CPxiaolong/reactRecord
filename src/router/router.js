import React, { Component } from 'react';
import Index from '../page/Index';
import AppChild from '../page/AppChild';
import Params from '../page/Params';
import MobxLearn from '../page/MobxLearn';
import Error from '../page/Error';
import MobxTest from '../component/MobxTest';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

class ProjectRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={AppChild} />
                    <Route path="AppChild" component={AppChild} />
                </Route>
                <Route path="/Mobx" component={MobxTest} />
                <Route path="/MobxLearn" component={MobxLearn} />
                <Route path="/Params(/:paramName)" component={Params} />
                <Route path="*" component={Error} />
            </Router>
        )
    }
}

export default ProjectRouter;
