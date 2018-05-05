import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const reduxDevtools = window.devToolsExtension;

export const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools?reduxDevtools():()=>{}
));

// reducer
// generate new state base on current state
function counter(state=0, action){
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'sub':
      return state - 1;
    default:
      return state;

  }
}

// action creater
export function addGun(){
  return dispatch=>{
    dispatch({type: 'add'});
  };
}

export function delayAdd(){
  return dispatch=>{
    setTimeout(()=>{
      dispatch({type: 'add'});
    }, 3000);
  }
}
