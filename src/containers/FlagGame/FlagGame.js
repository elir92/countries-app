import React, { Component } from 'react';
import { Button } from 'reactstrap';
import globe from '../../globe.svg';
import './FlagGame.css';

class FlagGame extends Component{
    render(){
        return(
            <div className="Flag-Intro">
               <h1 className="Flag-Title">Flags Quiz Game</h1>
               <img src={globe} className="Flag-logo" alt="globe" />
               <Button color="secondary" size="lg">Start Game</Button>
            </div>
        );
    }
}

export default FlagGame;