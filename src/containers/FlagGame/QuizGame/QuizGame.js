import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { restartGame, rightAnswer } from '../../../store/actions/actions';
import { checkAnswer } from '../../../utility';
import { Row, Col } from 'reactstrap';
import './QuizGame.css';
import DoneGame from '../../../components/DoneGame/DoneGame';
import StageAvatar from '../../../components/StageAvatar/StageAvatar';
import RestartButton from '../../../components/RestartButton/RestartButton';
import AnswerList from '../../../components/AnswerList/AnswerList';
import RandomFlag from '../../../components/RandomFlag/RandomFlag';

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

        return (
            <Row>
                <Col sm="12" md="6" className="Flag-Col">
                    <RandomFlag flag={randomFlag.flag} />
                </Col>
                <Col sm="12" md="6" className="Answer-Col">
                    <StageAvatar stage={currentStage + 1} />
                    <RestartButton reset={restartGameHandler} />
                    <AnswerList
                        game={game}
                        stage={currentStage}
                        flag={randomFlag}
                        click={this.answerHandler}
                        id={this.state.wrongId} />
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