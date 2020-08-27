import React,{Component} from "react";
import { render } from "react-dom";

class Counter extends Component {
    state = {
        score = 0 
    }


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

render () {
    return (
        <div className="counter">
          <button className="counter-action decrement"></button>
          <span className="counter-score"></span>
          <button className="counter-action increment"></button>
        </div>
    )
  }
}


export default Counter 