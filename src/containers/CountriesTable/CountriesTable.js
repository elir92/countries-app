import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries, setSearchField, setModalState } from '../../store/actions/actions';
import { Table, Button } from 'reactstrap';
import CountryModal from '../../components/CountryModal/CountryModal';
import Spinner from '../../components/Spinner/Spinner';
import './CountriesTable.css';


class CountriesTable extends React.Component {

    state = {
        count: 10
    }

    componentDidMount() {
        if (!this.props.countries.length) {
            this.props.requestCountriesHandler();
        }
    }

    renderCountriesRows = (arr) => {
        return arr.map(country => {
            return (
                <tr onClick={() => this.props.ModalStateHandler(country)} key={country.alpha3Code}>
                    <td>{country.name}</td>
                    <td>{country.capital !== "" ? country.capital : <b>Unknown</b>}</td>
                    <td>{country.region !== "" ? country.region : <b>Unknown</b>}</td>
                </tr>
            );
        });
    }

    loadMoreHandler = (arr) => {
        if (arr.length <= this.props.countries.length) {
            let loadMore = arr.length + 20;
            this.setState({ count: loadMore });
        }
    }


    renderTable = () => {
        const { countries, searchField, searchFieldHandler } = this.props;
        const currentCountries = countries.slice(0, this.state.count);
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
                        <Button className="Button-table" onClick={() => this.loadMoreHandler(currentCountries)}>Load More</Button>
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
        searchField: state.tableReducer.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries()),
        searchFieldHandler: (e) => dispatch(setSearchField(e.target.value)),
        ModalStateHandler: (country) => dispatch(setModalState(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);