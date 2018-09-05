import React, { Component } from 'react';
import './Home.css';
import globe from '../../globe.svg';

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <h1 className="Home-title">Welcome</h1>
                <img src={globe} className="Home-logo" alt="globe" />
            </div>
        );
    }
}

export default Home;