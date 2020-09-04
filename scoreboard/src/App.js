import React from 'react';
import Player from './Player';
import Header from './Header';
import { render } from 'react-dom';


class App extends React.Component {

    state = {
        player : [
          {
            name:'Guil',
            id: 1
          },
          {
            name:'Treasure',
            id: 2
          },
          {
            name:'Ashley',
            id: 3
          },
          {
            name:'James',
            id: 4
          },
        ]
    }

    handleRemovePlayer = (id) => {
      this.setState( prevState => {
          return {
            Players: prevState.Players.filter( p => p.id != id )
        };
      })
    }
  
    render() {
    return (
      <div className="scoreboard">
        <header 
           title = 'Scoreboard' 
           totalPlayers = { this.state.Players.length} 
        />
        
        {/* Players list */}
        {this.state.Players.map(player =>
        <Player 
           name = { player.name } 
           id = { player.id }
           key ={ player.id.toString() }
           removePlayer = { this.handleRemovePlayer }
        />  
        )}
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

*/