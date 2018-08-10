import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import StockDetail from "./Stock";

class App extends Component {
  state = {
    username: "John Doe"
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/stocks">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <h1>React Router</h1>
          <Switch>
            <Route path="/about" component={About} />
            {/*<Route path="/stock/:symbol" component={Stock} />*/}
            <Route path="/stocks/:symbol" render={ (props) => <StockDetail {...props} /> } />
            <Route path="/stocks" exact component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
