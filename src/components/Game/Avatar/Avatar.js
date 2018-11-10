import React from 'react';

const avatar = ({ context, className }) => {
    return (
        <div className={className}><span>{context}</span></div>
    )
}

export default avatar;