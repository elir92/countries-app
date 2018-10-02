import React from 'react';

const RandomFlag = ({ flag }) => {
    return (
        <div className="Flag-Img" style={{ backgroundImage: `url(${flag})` }}></div>
    );
}

export default RandomFlag;