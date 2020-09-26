import React, { Component } from 'react'

class Die extends Component {
    render() {
        // let cls = `fas fa-dice-${this.props.face}`
        return <i className={`fas fa-dice-${this.props.face}`} />
           
    }
}

export default Die;