import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const appJumbotron = (props) => {
  return (
      <Jumbotron className="bg-dark" fluid>
        <Container fluid>
          <h3 className="display-4 text-center text-white">Countries App</h3>
          <p className="lead text-center text-white">countries table</p>
        </Container>
      </Jumbotron>
  );
};

export default appJumbotron;