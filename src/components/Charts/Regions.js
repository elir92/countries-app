import React from 'react';
import { Bar } from 'react-chartjs-2';




const regionGraph = ({ regions, countedCountries }) => {

    const countriesPerRegion = countedCountries.map(country => country.count);

    const data = {
        labels: regions,
        datasets: [
            {
                label: 'Number Of Countries',
                backgroundColor: '#1b1a1a5c',
                borderColor: '#343a40',
                borderWidth: 1,
                hoverBackgroundColor: '#e9ebed',
                hoverBorderColor: '#343a40',
                data: countriesPerRegion
            }
        ]
    };

    return <Bar data={data} />
}

export default regionGraph;

