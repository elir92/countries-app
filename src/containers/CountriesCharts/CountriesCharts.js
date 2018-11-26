import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../../store/actions/actions';
import { Row, Col } from 'reactstrap';
import PopulationGraph from '../../components/Charts/Population';
import RegionGraph from '../../components/Charts/Regions';



class CountriesCharts extends Component {

    constructor() {
        super();
        this.state = {
            topThree: []
        }
    }


    componentDidMount() {
        if (!this.props.countries.length) {
            this.props.requestCountriesHandler();
        }
    }


    render() {
        return (
            <Row>
                <Col>
                    <PopulationGraph />
                </Col>
                <Col>
                    <RegionGraph />
                </Col>
            </Row>
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