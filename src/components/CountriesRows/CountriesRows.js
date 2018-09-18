import React from 'react';

const CountriesRows = ({ arr, modal }) => {
    return arr.map(country => {
        return (
            <tr onClick={() => modal(country)} key={country.alpha3Code}>
                <td>{country.name}</td>
                <td>{country.capital !== "" ? country.capital : <b>Unknown</b>}</td>
                <td>{country.region !== "" ? country.region : <b>Unknown</b>}</td>
            </tr>
        );
    });
}

export default CountriesRows;