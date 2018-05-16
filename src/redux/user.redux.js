import axios from 'axios';
import thunk from 'thunk';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

export function user(state, action){
  //
}

function errorMsg(msg){
  return { msg, type: ERROR_MSG}
}

export function register({user,pwd,repeatpwd,type}){
  if(!user||!pwd||!type){
    return errorMsg('username or password cannot be empty');
  }
  if(pwd!=repeatpwd){
    return errorMsg('passwords are different');
  }

  return dispatch=>{
    axios.post('/user/register',{user,pwd,type}).then(res=>{
      if(res.data.status==200&&rest.data.code==0){
        dispatch(REGISTER_SUCCESS({user,pwd,type}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    });
  }
}
