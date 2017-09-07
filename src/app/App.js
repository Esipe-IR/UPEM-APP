import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import Topbar from "./Topbar";
import Home from "../home/Home";
import CalendarResources from "../calendar/CalendarResources";
import CalendarEvents from "../calendar/CalendarEvents";
import { rcvToken, askUser } from "./redux/actions";
import { sdk } from "../services/upem";

class App extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props;

    sdk.onToken(token => {
      dispatch(rcvToken(token));
      dispatch(askUser());
    });
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <main>
          <Topbar />

          <Route exact path="/" title="home" component={Home} />
          <Route
            exact
            path="/calendar"
            title="calendar_resources"
            component={CalendarResources}
          />
          <Route
            path="/calendar/:resources"
            title="calendar_events"
            component={CalendarEvents}
          />
        </main>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
