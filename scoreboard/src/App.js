import React,{Component} from 'react';
import Player from './Player';
import Header from './Header';


class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="scoreboard">
        <header title = 'Scoreboard' totalPlayers = {1} />

        <Player />  
      
      </div>
    );
  }
}

export default App;
