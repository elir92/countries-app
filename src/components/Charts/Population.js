import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#28a745',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#28a745',
            '#FFCE56'
        ]
    }]
};

const populationGraph = ({ popData }) => {
 
    return <Pie width={120}
        height={50} data={data} />
}

export default populationGraph;