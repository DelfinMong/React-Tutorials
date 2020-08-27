import React from 'react';

import Counter from './Counter';

const Player = (props) => {
    return (
        <div className="player">
           <span className="player-name">
              <button className="remove-player"></button>
              { props.name }
           </span>
        </div>
    )
}

export default Player;