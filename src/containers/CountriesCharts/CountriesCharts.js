import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../../store/actions/actions';
import { Pie } from 'react-chartjs-2';

const PopulationGraph = () => {
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
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    return <Pie data={data} />
}

class CountriesCharts extends Component {


    componentDidMount() {
        if (!this.props.countries.length) {
            this.props.requestCountriesHandler();
        }
    }

    render() {
        return (
            <PopulationGraph />
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.tableReducer.countries
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCharts);