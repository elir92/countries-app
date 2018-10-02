import React, { Fragment } from 'react';

const SearchInput = ({ search }) => {
    return (
        <Fragment>
            <label>Search</label>
            <input onChange={search} type="text" />
        </Fragment>
    );
}

export default SearchInput;