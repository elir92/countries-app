import React from 'react';
import { Button } from 'reactstrap';

const AnswerList = ({ game, stage, flag, rightAnswerFlagId, wrongAnswerFlagId, click, answerFlag }) => {
    const answersList = game[stage].map(country => {
        return <li key={country.alpha3Code}>
            <Button
                disabled={answerFlag}
                className="Answer-Button"
                onClick={() => click(country.name, flag.name, country.alpha3Code)}
                color="secondary">
                {country.name}
            </Button>
            {wrongAnswerFlagId === country.alpha3Code ? <i className="far fa-times-circle wrong-ans"></i> : null}
            {rightAnswerFlagId === country.alpha3Code ? <i className="far fa-check-circle right-ans"></i> : null}
        </li>;
    });

    return (
        <ul>
            {answersList}
        </ul>
    );
}

export default AnswerList;