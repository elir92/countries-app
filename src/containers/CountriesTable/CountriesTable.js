import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { requestCountries, setSearchField, setModalState } from '../../store/actions/actions';
import { Table } from 'reactstrap';
import TableHead from '../../components/Table/TableHead/TableHead';
import TableBody from '../../components/Table/TableBody/TableBody';
import CountriesRows from '../../components/Table/CountriesRows/CountriesRows';
import CountryModal from './CountryModal/CountryModal';
import Spinner from '../../components/Spinner/Spinner';
import LoadButton from '../../components/Table/LoadButton/LoadButton';
import SearchInput from '../../components/Table/SearchInput/SearchInput';
import './CountriesTable.css';


class CountriesTable extends React.Component {

    state = {
        count: 10,
        showButton: true,
        height: window.innerHeight
    }

    componentDidMount() {
        if (!this.props.countries.length) {
            this.props.requestCountriesHandler();
        }

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.state.height > 850 ? this.setState({ count: 10 }) : this.setState({ count: 4 });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.count <= nextProps.countries.length;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    handleScroll = () => {
        const wrappedElement = document.getElementById('scrolledTable');
        if (this.isBottom(wrappedElement)) {
            this.loadMoreHandler();
        }
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerHeight });
    };

    loadMoreHandler = () => {
        if (this.state.count !== this.props.countries.length) {
            this.setState((prevState, props) => {
                return {
                    count: prevState.count + 20,
                }
            });
        }
    }

    loadMoreButton = () => {
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 20,
                showButton: false
            }
        });
    }

    renderTable = () => {
        const { countries, searchField, searchFieldHandler, ModalStateHandler } = this.props;
        const currentCountries = countries.slice(0, this.state.count);
        const filteredCountry = countries.filter(country => {
            return country.name.toLowerCase().includes(searchField.toLowerCase());
        });

        const initTable = () => {
            return (
                <Fragment>
                    <SearchInput search={searchFieldHandler} />
                    <Table id="scrolledTable" className="Table" striped bordered responsive>
                        <TableHead />
                        <TableBody>
                            <CountriesRows searchField={searchField} countries={currentCountries} filtered={filteredCountry} modal={ModalStateHandler} />
                        </TableBody>
                    </Table>
                    <LoadButton searchField={searchField} showButton={this.state.showButton} count={this.state.count} load={this.loadMoreButton} />
                </Fragment>
            )
        }

        return currentCountries.length ? initTable() : <h2 className="loading-msg">Loading...</h2>;

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