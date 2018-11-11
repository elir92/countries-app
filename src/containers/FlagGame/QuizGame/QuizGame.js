import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame, answerHandler } from '../../../store/actions/actions';
import { Row, Col } from 'reactstrap';
import './QuizGame.css';
import DoneGame from '../../../components/Game/DoneGame/DoneGame';
import Avatar from '../../../components/Game/Avatar/Avatar';
import RestartButton from '../../../components/Game/RestartButton/RestartButton';
import AnswerList from '../../../components/Game/AnswerList/AnswerList';
import RandomFlag from '../../../components/Game/RandomFlag/RandomFlag';

class QuizGame extends Component {

    state = {
        wrongId: '',
        rightId: '',
        nextStage: false,
        answerFlag: false,
        countRightAnswer: 0,
        timer: 7
    }


    tick() {
        this.setState((prevState) => {
            return {
                timer: prevState.timer - 1
            }
        });
    }

    nextStageHandler(stage) {
        this.props.answerHandler(stage);
        this.setState({ answerFlag: false, timer: 7 });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.timer >= 0;
    }


    componentDidUpdate(prevProps, prevState) {

        if (!this.state.timer) {
            this.nextStageHandler(this.props.currentStage);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    answerHandler = (answer, flag, id) => {
        if (answer === flag) {
            this.setState((prevState, props) => {
                return {
                    countRightAnswer: prevState.countRightAnswer + 1,
                    rightId: id,
                    wrongId: '',
                    answerFlag: true
                }
            });
            setTimeout(() => this.nextStageHandler(this.props.currentStage), 1000);
        } else {
            this.setState({ wrongAnswer: true, wrongId: id, rightId: '', answerFlag: true });
            setTimeout(() => this.nextStageHandler(this.props.currentStage), 1000);
        }
    }



    renderStage = () => {
        const { game, currentStage, randomFlag, restartGameHandler } = this.props;
        return (
            <Row>
                <Col sm="12" md="6" className="Flag-Col">
                    <RandomFlag flag={randomFlag.flag} />
                </Col>
                <Col sm="12" md="6" className="Answer-Col">
                    <span>{this.state.timer}</span>
                    <Avatar className="Stage-Avatar" context={currentStage + 1} />
                    <RestartButton reset={restartGameHandler} />
                    <AnswerList
                        game={game}
                        stage={currentStage}
                        flag={randomFlag}
                        click={this.answerHandler}
                        wrongAnswerFlagId={this.state.wrongId}
                        rightAnswerFlagId={this.state.rightId}
                        answerFlag={this.state.answerFlag} />
                </Col>
            </Row>
        );
    }

    renderGame = () => {
        if (this.props.currentStage !== 10) {
            return this.renderStage();
        } else {
            return <DoneGame score={this.state.countRightAnswer} restart={this.props.restartGameHandler} />
        }

    }

    render() {
        return (
            <div className="Quiz-Game">
                {this.renderGame()}
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
        answerHandler: (currentStage) => dispatch(answerHandler(currentStage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);