import React from 'react';
import { Button } from 'reactstrap';

const AnswerList = ({ game, stage, flag, id, click }) => {
    const answersList = game[stage].map(country => {
        return <li key={country.alpha3Code}>
            <Button className="Answer-Button" onClick={() => click(country.name, flag.name, country.alpha3Code)} color="secondary">{country.name}</Button>
            {id === country.alpha3Code ? <i className="far fa-times-circle wrong-ans"></i> : null}
        </li>;
    });
    
    return (
        <ul>
            {answersList}
        </ul>
    );
}

export default AnswerList;