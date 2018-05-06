// reducer
// generate new state base on current state
export function counter(state=0, action){
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
