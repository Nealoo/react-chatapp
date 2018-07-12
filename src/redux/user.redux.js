import axios from 'axios';
import thunk from 'redux-thunk';
import {getRedirectPath} from '../util.js';

const initState={
  redirectTo:'',
  isAuth: false,
  msg: '',
  user: '',
  pwd:'',
  type:''
}
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

export function user(state=initState, action){
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case LOGIN_SUCCESS:
      return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case ERROR_MSG:
      return {...state, msg:action.msg, isAuth:false}
    default:
      return state
  }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data){
  return { type: LOGIN_SUCCESS, payload: data};
}

function errorMsg(msg){
  return { msg, type: ERROR_MSG}
}

export function login({user,pwd}){
  if (!user||!pwd){
    return errorMsg('user name or password cannot be null');
  }

  return dispatch=>{
    axios.post('/user/login',{user,pwd})
      .then(res=>{
        if(res.status==200&&res.data.code==0){
          dispatch(loginSuccess(res.data.data));
        }else{
          dispatch(errorMsg(res.data.msg));
        }
      })
  }
}

export function register({user,pwd,repeatpwd,type}){
  if(!user||!pwd||!type){
    return errorMsg('username or password cannot be empty');
  }
  if(pwd!==repeatpwd){
    return errorMsg('passwords are different');
  }

  return dispatch=>{
    axios.post('/user/register',{user,pwd,type}).then(res=>{
      if(res.status===200&&res.data.code===0){
        dispatch(registerSuccess({user,pwd,type}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    });
  }
}
