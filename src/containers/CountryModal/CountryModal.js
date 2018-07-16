import React from 'react';
import { connect } from 'react-redux';
import { modalToggle } from '../../store/actions/actions';
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './CountryModal.css';

class CountryModal extends React.Component {

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggleHandler} className="country-modal">
                    <ModalHeader toggle={this.props.toggleHandler}>{this.props.currentCountry.name}</ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardImg src={this.props.currentCountry.flag} alt="Card image cap" className="flag-img" />
                            <CardBody>
                                <CardTitle className="card-title">Located in {this.props.currentCountry.region}</CardTitle>
                                <CardText>
                                    The capital city is {this.props.currentCountry.capital}. <br />
                                    {this.props.currentCountry.name} population number is {this.props.currentCountry.population}.  <br />
                                    {this.props.currentCountry.name} Alpha 3 Code is {this.props.currentCountry.alpha3Code}.
                                </CardText>
                            </CardBody>
                        </Card>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.countriesReducer.modal,
        currentCountry: state.countriesReducer.currentCountry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHandler: () => dispatch(modalToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryModal);