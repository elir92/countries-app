import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries, switchPage } from '../../store/actions/actions';
import { paginate, displayPages } from '../../utility';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


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

    renderButtons = (arr) => {
        return (
            <Pagination className="d-flex justify-content-center">
                {arr.map(btnNumber => {
                    return (
                        <PaginationLink  onClick={() => this.props.switchPageHandler(btnNumber)} key={btnNumber}>
                            <PaginationItem >
                                {btnNumber}
                            </PaginationItem>
                        </PaginationLink>
                    );
                })}
            </Pagination>
        );
    }

    renderTable = () => {
        const { countries, currentPage, countriesPerPage } = this.props;
        const currentCountries = paginate(countries, currentPage, countriesPerPage);
        const pageButtonNumbers = displayPages(countries, countriesPerPage);
        // const filteredCountry = countries.filter(country => {
        //     return country.name.toLowerCase().includes(searchField.toLowerCase());
        // });


        return (
            <Fragment>
                <Table bordered hover responsive>
                    <thead>
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
                {this.renderButtons(pageButtonNumbers)}
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
        currentPage: state.countriesReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries()),
        switchPageHandler: (num) => dispatch(switchPage(num))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);