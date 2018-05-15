import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './container/login/Login';
import Register from './container/register/Register';
import reducers from './reducer';

const reduxDevtools = window.devToolsExtension;
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools?reduxDevtools():()=>{}
));

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
