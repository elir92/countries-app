import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { restartGame, rightAnswer } from '../../store/actions/actions';
import { checkAnswer } from '../../utility';
import { Button, Row, Col, Alert } from 'reactstrap';
import './QuizGame.css';
import DoneGame from './DoneGame';

class QuizGame extends Component {

    state = {
        wrongAnswer: false,
    }


    answerHandler = (answer, flag) => {
        //Check if its match to the flag
        const ans = checkAnswer(answer, flag);
        if (ans) {
            this.setState({ wrongAnswer: false });
            this.props.rightAnswerHandler(this.props.currentStage);

        }
        if (!ans) {
            this.setState({ wrongAnswer: true });
        }
    }



    renderGame = () => {
        const { game, currentStage, randomFlag, restartGameHandler } = this.props;
        const answersList = game[currentStage].map(country => {
            return <li key={country.alpha3Code}>
                <Button onClick={() => this.answerHandler(country.name, randomFlag.name)} color="secondary" block>{country.name}</Button>
            </li>;
        });

        const wrongAnswer = this.state.wrongAnswer ? <Alert className="Wrong-Alert" color="danger">Wrong! Try Again</Alert> : null;

        return (
            <Row>
                <Col sm="12" md="6" className="Flag-Col">
                    <div className="Flag-Img" style={{ backgroundImage: `url(${randomFlag.flag})` }}></div>
                </Col>
                <Col sm="12" md="6" className="Answer-Col">
                    <div className="Stage-Avatar"><span>{currentStage + 1}</span></div>
                    <div className="Restart-Button">
                        <Button onClick={restartGameHandler} color="secondary" outline>Restart</Button>
                    </div>
                    <ul>
                        {answersList}
                    </ul>
                    {wrongAnswer}
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <Fragment>
                {this.props.currentStage !== 10 ? this.renderGame() : <DoneGame restart={this.props.restartGameHandler} />}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        game: state.gameReducer.game,
        currentStage: state.gameReducer.currentStage,
        randomFlag: state.gameReducer.randomFlag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        restartGameHandler: () => dispatch(restartGame()),
        rightAnswerHandler: (currentStage) => dispatch(rightAnswer(currentStage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);