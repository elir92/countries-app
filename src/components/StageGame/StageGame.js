import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../store/actions/actions'
import { Button } from 'reactstrap';

class StageGame extends Component {
    render() {
        return (
            <div>
                Helloooo this is stage
                <Button onClick={this.props.restartGameHandler} color="danger" size="lg">Restart Game</Button>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        restartGameHandler: () => dispatch(restartGame())
    }
}

export default connect(null, mapDispatchToProps)(StageGame);