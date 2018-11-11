import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../store/actions/actions';
import './Home.css';
import globe from '../../assets/globe.svg';
import reactLogo from '../../assets/react-logo.svg';
import reduxLogo from '../../assets/redux-logo.svg';

class Home extends Component {
    componentDidMount() {
        this.props.restartGameHandler();
    }
    render() {
        return (
            <div className="Home">
                <h1 className="Home-title">Welcome</h1>
                <img src={globe} className="Home-logo" alt="globe" />
                <h4 className="details__headtitle">Based on</h4>
                <a href="https://reactjs.org/"><img className="react-logo" src={reactLogo} alt="logo" /></a>
                <a href="https://redux.js.org/"><img className="redux-logo" src={reduxLogo} alt="logo" /></a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        restartGameHandler: () => dispatch(restartGame())
    }
}


export default connect(null, mapDispatchToProps)(Home);