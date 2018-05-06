import React from 'react';
import {connect} from 'react-redux';
import { addGun, delayAdd } from './index.redux.js'

// const mapStateToProps = (state)=>{
//   return {num:state};
// }
// const actionCreators = { addGun, delayAdd };
//App = connect(mapStateToProps, actionCreators)(App);

@connect(
  state=>({num:state.counter}),
  { addGun, delayAdd }
)
class App extends React.Component {

  render() {
    const addGun = this.props.addGun;
    const delayAdd = this.props.delayAdd;
    const num = this.props.num;
    return (
      <div>
        <h1>now the GUN is {num}</h1>
        <button onClick={addGun}>add GUN</button>
        <button onClick={delayAdd}>delay add</button>
      </div>
    )
  }
}

export default App;
