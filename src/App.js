import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Layout from './containers/Layout';
import AppJumbotron from './components/AppJumbotron/AppJumbotron';
import CountriesTable from './containers/CountriesTable/CountriesTable';

class App extends Component {
  render() {
    return (
      <Layout>
        <AppJumbotron />
        <Container>
          <CountriesTable />
        </Container>
      </Layout>
    );
  }
}

export default App;
