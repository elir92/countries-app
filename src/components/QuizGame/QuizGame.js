import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { restartGame, rightAnswer } from '../../store/actions/actions';
import { checkAnswer } from '../../utility';
import { Button, Row, Col } from 'reactstrap';
import './QuizGame.css';
import DoneGame from './DoneGame';

class QuizGame extends Component {

    state = {
        wrongAnswer: false,
        wrongId: ''
    }


    answerHandler = (answer, flag, id) => {
        //Check if its match to the flag
        const ans = checkAnswer(answer, flag);
        if (ans) {
            this.setState({ wrongAnswer: false });
            this.props.rightAnswerHandler(this.props.currentStage);
        }
        if (!ans) {
            this.setState({ wrongAnswer: true, wrongId: id });
        }
    }

    renderGame = () => {
        const { game, currentStage, randomFlag, restartGameHandler } = this.props;
        const answersList = game[currentStage].map(country => {
            return <li key={country.alpha3Code}>
                <Button className="Answer-Button" onClick={() => this.answerHandler(country.name, randomFlag.name, country.alpha3Code)} color="secondary">{country.name}</Button>
                {this.state.wrongId === country.alpha3Code ? <i id={country.alpha3Code} className="far fa-times-circle wrong-ans"></i> : null}
            </li>;
        });
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