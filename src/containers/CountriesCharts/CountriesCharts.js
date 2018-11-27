import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../../store/actions/actions';
import { Row, Col } from 'reactstrap';
import PopulationGraph from '../../components/Charts/Population';
import RegionGraph from '../../components/Charts/Regions';
import Spinner from '../../components/Spinner/Spinner';
import './CountriesCharts.css';



class CountriesCharts extends Component {

    componentDidMount() {
        if (!this.props.topThreeCountries.length) {
            this.props.requestCountriesHandler();
        }
    }

    renderGraphs = () => {
        const { topThreeCountries, regions, countedCountries } = this.props;
        return (
            <Row className="Charts">
                <Col className="TopThree">
                    <h2 style={{ textAlign: 'center' }}>Top Highest Population</h2>
                    <PopulationGraph popData={topThreeCountries} />
                </Col>
                <Col>
                <h2 style={{ textAlign: 'center' }}>Countries Per Continent</h2>
                    <RegionGraph regions={regions} countedCountries={countedCountries} />
                </Col>
            </Row>
        );
    }

    render() {
        return !this.props.isPending ? this.renderGraphs() : <Spinner />
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