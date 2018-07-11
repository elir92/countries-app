import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../../store/actions/actions';
import { Table } from 'reactstrap';

class CountriesTable extends React.Component {

    componentDidMount() {
        this.props.requestCountriesHandler();
    }

    renderCountriesRows = (arr) => {
        return arr.map(country => {
            return (
                <tr key={country.alpha3Code}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.region}</td>
                </tr>
            );
        });
    }

    renderTable = () => {
        return (
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCountriesRows(this.props.countries)}
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <Fragment>
                {!this.props.isPending ? this.renderTable() : <h2>Loading...</h2>}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countriesReducer.countries,
        isPending: state.countriesReducer.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);