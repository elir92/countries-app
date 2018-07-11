import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const appJumbotron = (props) => {
  return (
      <Jumbotron className="bg-dark" fluid>
        <Container fluid>
          <h2 className="display-5 text-center text-white">Countries App</h2>
        </Container>
      </Jumbotron>
  );
};

export default appJumbotron;