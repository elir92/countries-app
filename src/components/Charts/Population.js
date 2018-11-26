import React from 'react';
import { Pie } from 'react-chartjs-2';



const populationGraph = ({ popData }) => {
    
    const populationArray = popData.map(country => country.population);
    const countriesLabels = popData.map(country => country.name);

    const data = {
        labels:countriesLabels,
        datasets: [{
            data: populationArray,
            backgroundColor: [
                '#CD6155',
                '#2E86C1',
                '#16A085'
            ],
            hoverBackgroundColor: [
                '#CD6155',
                '#2E86C1',
                '#16A085'
            ]
        }]
    };

    return <Pie width={100} height={50} data={data} />
}

export default populationGraph;