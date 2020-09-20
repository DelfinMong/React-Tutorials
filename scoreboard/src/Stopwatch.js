import React, { Component } from 'react';


class Stopwatch extends Component {
    
    state = {
        isRunning: false
    };

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        })
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