import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame, rightAnswer } from '../../../store/actions/actions';
import { checkAnswer } from '../../../utility';
import { Row, Col } from 'reactstrap';
import './QuizGame.css';
import DoneGame from '../../../components/Game/DoneGame/DoneGame';
import StageAvatar from '../../../components/Game/StageAvatar/StageAvatar';
import RestartButton from '../../../components/Game/RestartButton/RestartButton';
import AnswerList from '../../../components/Game/AnswerList/AnswerList';
import RandomFlag from '../../../components/Game/RandomFlag/RandomFlag';

class QuizGame extends Component {

    state = {
        wrongId: '',
        rightId: '',
        nextStage: false
    }


    answerHandler = (answer, flag, id) => {
        //Check if its match to the flag
        const ans = checkAnswer(answer, flag);
        if (ans) {
            this.setState({ rightId: id, wrongId: '' });
            setTimeout(() => this.nextStageHandler(this.props.currentStage), 1300);
        }
        if (!ans) {
            this.setState({ wrongAnswer: true, wrongId: id, rightId: '' });
        }
    }

    nextStageHandler() {
        this.props.rightAnswerHandler(this.props.currentStage);
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
                        wrongAnswerFlagId={this.state.wrongId}
                        rightAnswerFlagId={this.state.rightId} />
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div className="Quiz-Game">
                {this.props.currentStage !== 10 ? this.renderGame() : <DoneGame restart={this.props.restartGameHandler} />}
            </div>
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