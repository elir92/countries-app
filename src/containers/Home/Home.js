import React, { Component } from 'react';
import './Home.css';
import globe from '../../globe.svg';
import reactLogo from '../../react-logo.svg';
import reduxLogo from '../../redux-logo.svg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1 className="Home-title">Welcome</h1>
                <img src={globe} className="Home-logo" alt="globe" />
                <hr />
                <h4 className="details__headtitle">Sample application based on</h4>
                <img className="react-logo" src={reactLogo} alt="logo" />
                <img className="redux-logo" src={reduxLogo} alt="logo" />
            </div>
        );
    }
}

export default Home;