import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import localForage from "localforage";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import { IntroLoader } from "./introLoader";
import {Root} from "./core";
import Store from "./stateManager/index";
import { Container } from "semantic-ui-react";
class App extends Component {
  state = {
    isReady: false
  };
  componentDidMount() {
    this._init();
  }
  _init() {
    // For Local Storage to car session (if have time)
    persistStore(
      Store,
      {
        storage: localForage,
        whitelist: ["cart"]
      },
      () => {
        setTimeout(() => {
          this.setState({ isReady: true });
        }, 2000);
      }
    );
  }
  render() {
    if (!this.state.isReady) {
      return <IntroLoader />;
    }
    return (
      <Provider store={Store}>
        <Container>
          <br />
          <Root />
        </Container>
      </Provider>
    );
  }
}

export default App;
