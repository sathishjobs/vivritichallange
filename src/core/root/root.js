import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import { Header } from "../header";
import { Cart } from "../cart";
import { Home } from "../home";
class Root extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route  exact={true} path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Container>
      </Router>
    );
  }
}

export default Root;
