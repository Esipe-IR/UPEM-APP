import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import Topbar from "./Topbar";
import Home from "../home/Home";
import CResources from "../calendar/CResources/CResources";
import CEvents from "../calendar/CEvents/CEvents";
import Mail from "../mail/Mail";
import About from "../about/About";
import { askProject } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(askProject());
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div id="main">
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
              path="/calendar/:resource"
              title="calendar_events"
              component={CEvents}
            />
          ) : null}

          <Route path="/mail" title="mail" component={Mail} />
          <Route path="/maps" title="maps" component={null} />
          <Route path="/about" title="about" component={About} />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { app } = state;

  return {
    project: app.project
  };
};

export default connect(mapStateToProps)(App);
