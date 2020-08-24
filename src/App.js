import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SearchFlightsContainer } from "./pages/searchFlights-Container";
import { FlightDetailsContainer } from "./pages/flightdetails-container";
import history from "./history";

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/flights">
            <FlightDetailsContainer />
          </Route>
          <Route path="/">
            <SearchFlightsContainer />
          </Route>
        </Switch>
      </Router>
    );
  }
}
