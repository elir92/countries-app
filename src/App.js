import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Layout from './containers/Layout';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './containers/Home/Home';
import CountriesTable from './containers/CountriesTable/CountriesTable';
import FlagGame from './containers/FlagGame/FlagGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <AppNavbar />
          <Container>
            <Route path="/" exact component={Home}  />
            <Route path="/table" component={CountriesTable} />
            <Route path="/flag-game" component={FlagGame} />
          </Container>
        </Layout>
      </Router>
    );
  }
}

export default App;
