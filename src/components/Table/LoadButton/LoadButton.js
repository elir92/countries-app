import React from 'react';
import { Button } from 'reactstrap';

const LoadButton = ({ searchField, showButton, count, load }) => {
    return (
        !searchField.length ?
            <div className="d-flex justify-content-center">
                {!showButton || count > 10 ? null : <Button className="Button-table" onClick={() => load()}>Load More</Button>}
            </div>
        : null
    )
}

export default LoadButton;