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

    renderGraphs = () => {
        const { topThreeCountries, regions, countedCountries } = this.props;
        return (
            <Row>
                <Col>
                    <h2 style={{ textAlign: 'center' }}>Top Three Highest Population</h2>
                    <PopulationGraph popData={topThreeCountries} />
                </Col>
                <Col>
                    <RegionGraph regions={regions} countedCountries={countedCountries} />
                </Col>
            </Row>
        );
    }


    // Add spinner / Loading..

    render() {
        return !this.props.isPending ? this.renderGraphs() : <h2 style={{ textAlign: 'center' }}>Loading...</h2>
    }
}

const mapStateToProps = state => {
    return {
        isPending: state.chartsReducer.isPending,
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