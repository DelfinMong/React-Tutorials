import React from "react";

const Counter = ( props ) => {

  let index = props.index;

    return (
        <div className="counter">
          <button className="counter-action decrement" onClick = {() => props.changeScore(index, -1) }> - </button>
          <span className="counter-score">{ props.score }</span>
          <button className="counter-action increment" onClick = {() => props.changeScore(index, 1) }> + </button>
        </div>
    )
}


export default Counter 


// handleScoreChange = (index, delta) => {
//   this.setState( prevState => {
//     // New 'players' array – a copy of the previous `players` state
//     const updatedPlayers = [ ...prevState.players ];
//     // A copy of the player object we're targeting
//     const updatedPlayer = { ...updatedPlayers[index] };

//     // Update the target player's score
//     updatedPlayer.score += delta;
//     // Update the 'players' array with the target player's latest score
//     updatedPlayers[index] = updatedPlayer;

//     // Update the `players` state without mutating the original state
//     return {
//       players: updatedPlayers
//     };
//   });
// }