import React from 'react';
import { connect } from 'react-redux';
import { modalToggle } from '../../store/actions/actions';
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './CountryModal.css';

class CountryModal extends React.Component {

    render() {
        const { modal, toggleHandler, currentCountry } = this.props;

        return (
            <Modal isOpen={modal} toggle={toggleHandler} className="country-modal">
                <ModalHeader toggle={toggleHandler}>{currentCountry.name}</ModalHeader>
                <ModalBody>
                    <Card className="country-card">
                        <CardImg src={currentCountry.flag} alt="Card image cap" className="flag-img" />
                        <CardBody>
                            <CardTitle className="card-title">Located in {currentCountry.region !== "" ? currentCountry.region : `unknown`}</CardTitle>
                            <CardText>
                                The capital city is {currentCountry.capital !== "" ? currentCountry.capital : `unknown`}. <br />
                                Population number is {currentCountry.population}.  <br />
                                Alpha 3 Code is <b>{currentCountry.alpha3Code}</b>.
                            </CardText>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.tableReducer.modal,
        currentCountry: state.tableReducer.currentCountry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHandler: () => dispatch(modalToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryModal);