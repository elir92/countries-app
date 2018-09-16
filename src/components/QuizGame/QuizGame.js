import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { restartGame, rightAnswer } from '../../store/actions/actions';
import { checkAnswer } from '../../utility';
import { Button, Row, Col } from 'reactstrap';
import './QuizGame.css';

class QuizGame extends Component {

    renderGame = () => {
        const { game, currentStage } = this.props;

        const randFlag = game[currentStage][Math.floor(Math.random() * game[currentStage].length)];
        const answersList = game[currentStage].map(country => {
            return <li key={country.alpha3Code}>
                <Button onClick={() => this.answerHandler(country.name, randFlag.name)} color="secondary" block>{country.name}</Button>
            </li>;
        });

        return (
            <Row>
                <Col sm="12" md="6" className="Flag-Col">
                    <img className="Flag-Img" src={randFlag.flag} alt="flag" />
                </Col>
                <Col sm="12" md="6" className="Answer-Col">
                    <div className="Stage-Avatar"><span>{currentStage + 1}</span></div>
                    <ul>
                        {answersList}
                    </ul>

                </Col>
            </Row>
        );
    }



    answerHandler = (answer, flag) => {
        //Check if its match to the flag
        const ans = checkAnswer(answer, flag);
        if (ans) {
            this.props.rightAnswerHandler(this.props.currentStage);
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.currentStage !== 10 ? this.renderGame() : <h1>DONE!</h1>}
                <div className="Restart-Button">
                    <Button onClick={this.props.restartGameHandler} outline color="secondary" size="lg">Restart Game</Button>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        game: state.gameReducer.game,
        currentStage: state.gameReducer.currentStage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        restartGameHandler: () => dispatch(restartGame()),
        rightAnswerHandler: (currentStage) => dispatch(rightAnswer(currentStage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);