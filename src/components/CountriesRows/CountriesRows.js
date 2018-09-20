import React from 'react';

const CountriesRows = ({ searchField, countries, filtered, modal }) => {

    const renderTableRow = (arr) => {
        return arr.map(country => {
            return (
                <tr onClick={() => modal(country)} key={country.alpha3Code}>
                    <td>{country.name}</td>
                    <td>{country.capital !== "" ? country.capital : <b>Unknown</b>}</td>
                    <td>{country.region !== "" ? country.region : <b>Unknown</b>}</td>
                </tr>
            );
        })
    }
    
    return !searchField.length ? renderTableRow(countries) : renderTableRow(filtered);

}

export default CountriesRows;