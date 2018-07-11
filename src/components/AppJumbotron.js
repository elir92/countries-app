import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const appJumbotron = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h3 className="display-4">Countries App</h3>
          <p className="lead">countries table</p>
        </Container>
      </Jumbotron>
  );
};

export default appJumbotron;