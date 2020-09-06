import React, {Component} from 'react'
import './Pokecard.css'; 


class Pokecard extends Component {

    // const POKE_API = 

    render(){

        // let imgSrc = 
        return (
            <div className='Pokecard'> 
                <h1> { this.props.name}</h1>
                {/* <img src = { imgSRC } alt = '' /> */}
                <div> Type: { this.props.type } </div>
                <div> EXP: { this.props.exp } </div>
            </div>
        )
    }
}

export default Pokecard;