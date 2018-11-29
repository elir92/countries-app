import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries, startGame,restartGame } from '../../store/actions/actions';
import { Button } from 'reactstrap';
import globe from '../../assets/globe.svg';
import './FlagGame.css';
import QuizGame from './QuizGame/QuizGame';

class FlagGame extends Component {

    componentDidMount() {
        if (!this.props.countries.length) {
            this.props.requestCountriesHandler();
        }
    }

    componentWillUnmount() {
        this.props.restartGameHandler();
    }

    renderIntro = () => {
        return (
            <div className="Flag-Intro">
                <h1 className="Flag-Title">Flags Quiz Game</h1>
                <img src={globe} className="Flag-logo" alt="globe" />
                <Button onClick={this.props.startGameHandler} color="secondary" size="lg">Start Game</Button>
            </div>
        );
    }

    renderGame = () => {
        return (
            !this.props.gameStatus ? this.renderIntro() : <QuizGame />
        )
    }

    render() {
        return this.props.countries.length ? this.renderGame() : <h1 style={{textAlign: 'center'}} className="Flag-Title">Loading...</h1>;
    }
}

const mapStateToProps = state => {
    return {
        countries: state.tableReducer.countries,
        isPending: state.tableReducer.isPending,
        gameStatus: state.gameReducer.gameStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCountriesHandler: () => dispatch(requestCountries()),
        startGameHandler: () => dispatch(startGame()),
        restartGameHandler: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlagGame);