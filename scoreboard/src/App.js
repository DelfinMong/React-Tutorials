import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'



class App extends Component {

    state = {
        players : [
          {
            name:'Guil',
            score : 0,
            id: 1
          },
          {
            name:'Treasure',
            score : 0,
            id: 2
          },
          {
            name:'Ashley',
            score : 0,
            id: 3
          },
          {
            name:'James',
            score : 0,
            id: 4
          },
        ]
    }

    // player id counter

    prevPlayerId = 4;

    // setState
    // prevState
    handleScoreChange = (index,delta) => {
      this.setState( prevState => ({
         score: prevState.players[index].score += delta
      }));
    }

    handleAddPlayer = (name) => {
      this.setState( prevState => {
        return {
          players: [
            ...this.state.players,   // spread operators brings in all of the state. new array added at the end of the existing array.
            {
              name,  // name: name ( both name matches)
              score : 0,
              id: this.prevPlayerId += 1
            }
          ]
        };
      })
    }
  
    // filter
    handleRemovePlayer = (id) => {
      this.setState( prevState => {
          return {
            Players: prevState.players.filter( p => p.id !== id )
        };
      })
    }
  
    render() {
    // map 
    return (
      <div className="scoreboard">
        <Header 
           title = {'Scoreboard'} 
           players = { this.state.players }
        />
        
        {this.state.players.map( (player,index) =>
        <Player 
           name = { player.name } 
           score = { player.score }
           id = { player.id }
           key ={ player.id.toString() }
           index = { index }
           changeScore = { this.handleScoreChange }
           removePlayer = { this.handleRemovePlayer }
        />
        )}

        < AddPlayerForm  addPlayer = { this.handleAddPlayer }/>

      </div>
    );
  } 
}

export default App;

/* 
   Component State
State that is specific to a component and not shared outside of the compenent

   Application State
Data that is available to the entire application

git commit --amend --reset-author

*/

