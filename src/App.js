import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Layout from './containers/Layout';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './containers/Home/Home';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncTable = asyncComponent(()=> import('./containers/CountriesTable/CountriesTable'));
const asyncFlagGame = asyncComponent(() => import('./containers/FlagGame/FlagGame'));

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <AppNavbar />
          <Container>
            <Switch>
              <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
              <Route path={process.env.PUBLIC_URL + "/table"} component={asyncTable} />
              <Route path={process.env.PUBLIC_URL + "/flag-game"} component={asyncFlagGame} />
            </Switch>
          </Container>
        </Layout>
      </Router>
    );
  }
}

export default App;
