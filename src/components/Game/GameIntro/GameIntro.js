import React from 'react';
import { Button } from 'reactstrap';
import globe from '../../../assets/globe.svg'

const gameIntro = ({ startFlagGame }) => {
    return (
        <div className="Flag-Intro">
            <h1 className="Flag-Title">Flags Quiz Game</h1>
            <img src={globe} className="Flag-logo" alt="globe" />
            <Button onClick={startFlagGame} color="secondary" size="lg">Start Game</Button>
        </div>
    );
}

export default gameIntro;