import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    
    super(props);
    console.log("hello!")
    
  }
  state = {
    count :0
  };
  add = () => {
    this.setState( current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState( current => ({ count: current.count - 1 }));
  };
  componentDidMount(){
    console.log("component rednered");
  }
  componentDidUpdate(){
    console.log("i just updated!");
  }
  componentWillUnmount(){
    console.log("bye");
  }
  render(){
    console.log("iamrendered !!")
    return( 
    <div>
      <h1> the number is: {this.state.count}</h1>
      <button onClick={this.add}> ADD </button>
      <button onClick = {this.minus}> Minus </button>
    </div>);
  }
}

export default App;
