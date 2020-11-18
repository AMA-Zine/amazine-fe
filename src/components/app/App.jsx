import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Thread from '../thread/Thread';
import About from '../about/About';
import MichelleDetail from '../about-details/MichelleDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/thread"
              exact
              render={(routerProps) => <Thread {...routerProps} />}
            />
            <Route
              exact path="/about"
              exact
              render={(routerProps) => <About {...routerProps} />}
            />
            <Route
              exact path="/michelle"
              exact
              render={(routerProps) => <MichelleDetail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
