import React from 'react';

class App extends React.Component{
  render(){
    const varb = 'vb';
    return (
      <div>
        <h1>Hello, {varb}</h1>
        <Test ta='neal here'></Test>
        <TestFunc name="neal test" />
      </div>
    )
  }
}

function TestFunc(props) {
  return <h2>thing is :{props.name}</h2>
}

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      testArray: [11,33,44]
    }

    this.addArray = this.addArray.bind(this);
  }

  addArray(){
    this.setState({
      testArray: [...this.state.testArray, 'some new value'+Math.random()]
    })
  }

  render(){
    return (
      <div>
        <div>hi there from ({this.props.ta})</div>
        <ul>{this.state.testArray.map(
          v=>{return <li key={v}>{v}</li>}
        )}</ul>
        <button onClick={this.addArray}>add </button>
      </div>
    )
  }
}

export default App;
