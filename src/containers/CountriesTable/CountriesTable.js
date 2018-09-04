import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries, nextPage, prevPage, setSearchField, setModalState } from '../../store/actions/actions';
import { paginate } from '../../utility';
import { Table, Button } from 'reactstrap';
import CountryModal from '../CountryModal/CountryModal'
import Spinner from '../../components/Spinner/Spinner';
import './CountriesTable.css';


class CountriesTable extends React.Component {

    componentDidMount() {
        this.props.requestCountriesHandler();
    }

    renderCountriesRows = (arr) => {
        return arr.map(country => {
            return (
                <tr onClick={() => this.props.ModalStateHandler(country)} key={country.alpha3Code}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.region}</td>
                </tr>
            );
        });
    }


    renderTable = () => {
        const { countries, currentPage, countriesPerPage, nextPageHandler, prevPageHandler, searchField, searchFieldHandler } = this.props;
        const currentCountries = paginate(countries, currentPage, countriesPerPage);
        const filteredCountry = countries.filter(country => {
            return country.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <Fragment>
                <label>Search</label><input onChange={searchFieldHandler} type="text" />
                <Table className="Table" striped bordered responsive>
                    <thead className="Table-thead" >
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!searchField.length ? this.renderCountriesRows(currentCountries) : this.renderCountriesRows(filteredCountry)}
                    </tbody>
                </Table>

                {!searchField.length ? (
                    <div className="d-flex justify-content-center">
                        <Button className="Button-table" disabled={this.props.prevDisable} outline onClick={() => prevPageHandler(currentPage)}>Previous Page</Button>
                        <Button className="Button-table" disabled={this.props.nextDisable} outline onClick={() => nextPageHandler(currentPage)}>Next Page</Button>
                    </div>
                ) : null}

            </Fragment>
        )
    }


    render() {
        return (
            <Fragment>
                {!this.props.isPending ? this.renderTable() : <Spinner />}
                <CountryModal />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.tableReducer.countries,
        isPending: state.tableReducer.isPending,
        countriesPerPage: state.tableReducer.countriesPerPage,
        currentPage: state.tableReducer.currentPage,
        prevDisable: state.tableReducer.prevDisable,
        nextDisable: state.tableReducer.nextDisable,
        searchField: state.tableReducer.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries()),
        nextPageHandler: (num) => dispatch(nextPage(num)),
        prevPageHandler: (num) => dispatch(prevPage(num)),
        searchFieldHandler: (e) => dispatch(setSearchField(e.target.value)),
        ModalStateHandler: (country) => dispatch(setModalState(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);