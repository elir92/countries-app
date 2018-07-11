import React from 'react';
import { connect } from 'react-redux';
import {requestCountries} from '../../store/actions/actions';
import { Table } from 'reactstrap';

class CountriesTable extends React.Component {

    componentDidMount(){
        this.props.requestCountriesHandler();
    }
    
    render() {
        return (
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
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