import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './AppJumbotron.css';

const appJumbotron = (props) => {
  return (
      <Jumbotron className="bg-dark jumbo-fix" fluid>
        <Container fluid>
          <h1 className="jumbo-title display-5 text-center text-white">Countries App</h1>
        </Container>
      </Jumbotron>
  );
};

export default appJumbotron;