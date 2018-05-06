import axios from 'axios';

const LOGIN ='LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
  isAuth:false,
  user: 'default name',
  age:20
}

export function auth(state=initState,action){
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth:true};
    case LOGOUT:
      return {...state, isAuth:false};
    case USER_DATA:
      return {...state, user:action.data[0].user, age:action.data[0].age};
    default:
      return state;
  }
}

export function getUserData(){
  return dispatch=>{
    axios.get('/data').then(res=>{
      if(res.status == 200){
        dispatch({type: USER_DATA, data: res.data});
      }
    });
  }
}

function axiosGetData(){

  }

export function login(){
  return {type: LOGIN};
}

export function logout(){
  return {type: LOGOUT};
}
