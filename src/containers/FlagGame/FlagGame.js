import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountries, startGame, restartGame } from '../../store/actions/actions';
import GameIntro from '../../components/Game/GameIntro/GameIntro';
import Spinner from '../../components/Spinner/Spinner';
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

    renderGame = () => !this.props.gameStatus ? <GameIntro startFlagGame={this.props.startGameHandler} /> : <QuizGame />;

    render() {
        return this.props.countries.length ? this.renderGame() : <Spinner />;
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