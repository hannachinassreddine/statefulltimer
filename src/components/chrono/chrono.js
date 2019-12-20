import React from "react";
import Dynamic from './../dynamic/dynamic'

class chrono extends React.Component {
  state = {
    counter: 0,
    stateofcounter:false,
    vars:{}
  };
stinter=()=>{
    setInterval(() => {
        if(this.state.stateofcounter){
        this.setState({counter:this.state.counter + 1})
    }}, 1)
}


start = ()=>{
    if(this.state.stateofcounter){
        this.setState({stateofcounter:false})
    }
    else{
        this.setState({stateofcounter:true})
    }
   
    this.stinter()
    
    
}
reset=()=>{this.setState({counter:0})
    clearInterval(this.stinter())
}

  render() {
    return (
      <div>
        <Dynamic ms={this.state.counter}/>
        <button onClick={this.start}>Start</button>
        <span>{this.state.counter}</span>
        <button onClick={this.reset}>Reset</button>

        
      </div>
    );
  }
}
export default chrono;