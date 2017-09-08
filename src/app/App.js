import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import Topbar from "./Topbar";
import Home from "../home/Home";
import CResources from "../calendar/CResources/CResources";
import CEvents from "../calendar/CEvents/CEvents";
import { rcvToken, askUser, askProject } from "./redux/actions";
import { sdk } from "../services/upem";

class App extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props;

    sdk.onToken(token => {
      dispatch(rcvToken(token));
      dispatch(askUser());
    });

    dispatch(askProject());
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <main>
          <Topbar />
          <Route exact path="/" title="home" component={Home} />

          {this.props.project ? (
            <Route
              exact
              path="/calendar"
              title="calendar_resources"
              component={CResources}
            />
          ) : null}
          {this.props.project ? (
            <Route
              path="/calendar/:resources"
              title="calendar_events"
              component={CEvents}
            />
          ) : null}
        </main>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  project: state.app.project
});

export default connect(mapStateToProps)(App);
