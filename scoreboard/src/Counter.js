import React,{Component} from "react";
import { render } from "react-dom";

class Counter extends Component {
    state = {
        score = 0 
    };


incrementScore = () => {
    this.state( prevState => ({
       score: prevState.score + 1
    }));
}

decrementScore = () => {
    this.state( prevState => ({
       score: prevState.score - 1 
    }));
}

render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
          <span className="counter-score">{ this.state.score }</span>
          <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
        </div>
    )
  }
}


export default Counter 