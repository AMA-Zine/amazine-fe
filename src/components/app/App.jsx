import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import ThreadDetails from '../thread-details/ThreadDetails';
import About from '../about/About';
import MichelleDetail from '../about-details/MichelleDetail';
import PatrickDetail from '../about-details/PatrickDetail';
import JoshDetail from '../about-details/JoshDetail';
import SarahDetail from '../about-details/SarahDetail';

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
              path="/thread/:id"
              exact
              render={(routerProps) => <ThreadDetails {...routerProps} />}
            />
            <Route
              path="/about"
              exact
              render={(routerProps) => <About {...routerProps} />}
            />
            <Route
              path="/michelle"
              exact
              render={(routerProps) => <MichelleDetail {...routerProps} />}
            />
            <Route
              path="/josh"
              exact
              render={(routerProps) => <JoshDetail {...routerProps} />}
            />
            <Route
              path="/patrick"
              exact
              render={(routerProps) => <PatrickDetail {...routerProps} />}
            />
            <Route
              path="/sarah"
              exact
              render={(routerProps) => <SarahDetail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
