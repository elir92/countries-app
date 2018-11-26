import React from 'react';
import { Bar } from 'react-chartjs-2';




const regionGraph = ({ regions, countedCountries }) => {

    const countriesPerRegion = countedCountries.map(country => country.count);

    const data = {
        labels: regions,
        datasets: [
            {
                label: 'Countries Per Region',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: countriesPerRegion
            }
        ]
    };

    return <Bar data={data} />
}

export default regionGraph;

