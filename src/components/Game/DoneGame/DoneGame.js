import React from 'react';
import { Button } from 'reactstrap';
import './DoneGame.css';


const doneGame = (props) => {
    return (
        <div className="Done">
            <h1>Finish!</h1>
            <h3>You answered correctly on {props.score} {props.score === 1 ? 'question' : 'questions'}</h3>
            <hr />
            <Button onClick={props.restart} color="secondary" size="lg">Back</Button>
        </div>
    );
}

export default doneGame;