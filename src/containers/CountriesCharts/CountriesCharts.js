import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../../store/actions/actions';
import { Row, Col } from 'reactstrap';
import PopulationGraph from '../../components/Charts/Population';
import RegionGraph from '../../components/Charts/Regions';



class CountriesCharts extends Component {

    componentDidMount() {
        if (!this.props.topThreeCountries.length) {
            this.props.requestCountriesHandler();
        }
    }

    // Add spinner / Loading..

    render() {
        return (
            <Row>
                <Col>
                    <h2 style={{textAlign:'center'}}>Top Three Highest Population</h2>
                    <PopulationGraph popData={this.props.topThreeCountries} />
                </Col>
                <Col>
                    <RegionGraph regions={this.props.regions} countedCountries={this.props.countedCountries}/>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        topThreeCountries: state.chartsReducer.topThreeCountries,
        regions: state.chartsReducer.regions,
        countedCountries: state.chartsReducer.countedCountries
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCharts);