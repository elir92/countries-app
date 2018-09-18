import React from 'react';
import { Button } from 'reactstrap';

const LoadButton = ({ showButton, count, load }) => {
    return (
        <div className="d-flex justify-content-center">
            {!showButton || count > 10 ? null : <Button className="Button-table" onClick={() => load()}>Load More</Button>}
        </div>
    )
}

export default LoadButton;