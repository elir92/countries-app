import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries, nextPage, prevPage } from '../../store/actions/actions';
import { paginate } from '../../utility';
import { Table, Button } from 'reactstrap';
import './CountriesTable.css';


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
        const { countries, currentPage, countriesPerPage, nextPageHandler, prevPageHandler } = this.props;
        const currentCountries = paginate(countries, currentPage, countriesPerPage);
        // const filteredCountry = countries.filter(country => {
        //     return country.name.toLowerCase().includes(searchField.toLowerCase());
        // });


        return (
            <Fragment>
                <Table striped bordered hover responsive>
                    <thead className="table-thead" >
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCountriesRows(currentCountries)}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                    <Button style={{marginLeft:'10px'}} disabled={this.props.prevDisable} outline onClick={() => prevPageHandler(currentPage)}>Previous Page</Button>
                    <Button style={{marginLeft:'10px'}} disabled={this.props.nextDisable} outline onClick={() => nextPageHandler(currentPage)}>Next Page</Button>
                </div>
            </Fragment>

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
        isPending: state.countriesReducer.isPending,
        countriesPerPage: state.countriesReducer.countriesPerPage,
        currentPage: state.countriesReducer.currentPage,
        prevDisable: state.countriesReducer.prevDisable,
        nextDisable: state.countriesReducer.nextDisable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries()),
        nextPageHandler: (num) => dispatch(nextPage(num)),
        prevPageHandler: (num) => dispatch(prevPage(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);