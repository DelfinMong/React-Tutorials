import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        // let cls = `fas fa-dice-${this.props.face}`
        return (
            <i 
            className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 
                "shaking"}`}
            />
        )
    }
}

export default Die;