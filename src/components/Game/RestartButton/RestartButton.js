import React from 'react';
import { Button } from 'reactstrap';

const RestartButton = ({ reset }) => {
    return (
        <div className="Restart-Button">
            <Button onClick={reset} color="secondary" outline>Restart</Button>
        </div>);
}

export default RestartButton;