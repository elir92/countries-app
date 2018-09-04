import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import './AppNavbar.css';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleHandler = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Fragment>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container className="navbar-container">
                        <NavbarBrand href="/">Countries Application</NavbarBrand>
                        <NavbarToggler onClick={this.toggleHandler} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem  >
                                    <NavLink tag={Link} to="/table">
                                        Table
                                    </NavLink>
                                </NavItem  >
                                <NavItem >
                                    <NavLink tag={Link} to="/flag-game">
                                        Flag Game
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default AppNavbar