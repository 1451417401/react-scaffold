import 'babel-polyfill';
import './src/assets/css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import configureStore from './src/store/configureStore'
import * as routerComponent from './src/components';
import fetch from 'isomorphic-fetch';


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
        <Route path="/" onEnter={checkLogin} component={routerComponent.Home}></Route>
        <Route path="/home" onEnter={checkLogin} component={routerComponent.Home}>
            <IndexRoute component={routerComponent.Example}/>
            <Route path="testData" component={routerComponent.TestData}/>
            <Route path="state" component={routerComponent.SetDataTest}/>
            <Route path="example" component={routerComponent.Example}/>
        </Route>
        <Route path="/*" component={routerComponent.Login}></Route>
    </Router>
  </Provider>,
    document.getElementById('main')
)

function checkLogin() {

    // fetch('/server/checkLogin')
    //     .then(response => response.json())
    //     .then(json => {
    //         if (!json.result) {
    //             browserHistory.push('/login');
    //         }
    //     })

}
