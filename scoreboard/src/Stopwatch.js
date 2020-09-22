import React, { Component } from 'react';


class Stopwatch extends Component {
    
    state = {
        isRunning: false,
        elapswedTime: 0,
    };
    
    componentDidMount = () => {
        this.intervalID = setInterval( () => this.thick(),100 )
    }

    thick = () => {
       if (this.state.isRunning) {
           const now = Date.now();
           this.setState( prevState => ({
               previousTime: now,
               elapswedTime: prevState.elapswedTime + ( now - this.state.previousTime )
           }));
       }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning){
           this.setState({ previousTime: Date.now() });
        }
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={ this.handleStopwatch }>
                    { this.state.isRunning ? 'Stop' : 'Start'}
                </button> 
                <button>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;



// render() {
//     let button;
//     if (this.state.isRunning) {
//       button = <button>Stop</button>;
//     } else {
//       button = <button>Start</button>; 
//     }
  
//     return (
//       <div className="stopwatch">
//         <h2>Stopwatch</h2>
//         <span className="stopwatch-time">...</span>
//         { button }
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }