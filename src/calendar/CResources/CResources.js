import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { askResources, askSearch, rcvMaxItems } from "./redux/actions";
import { logEvent } from "../../services/analytics";
import View from "./view";

class CResources extends React.Component {
  componentDidMount() {
    this.props.dispatch(askResources());
  }

  search(e) {
    e.preventDefault();
    const value = e.target[0].value;

    logEvent("resources_search", null, {
      search: value
    });

    this.props.dispatch(askSearch(value));
  }

  load(path) {
    let resources = path.replace("/calendar/", "");
    resources = parseInt(resources, 10);

    logEvent("resources_click_view", resources, {
      uri: path
    });

    this.props.dispatch(push(path));
  }

  more() {
    const maxItems = this.props.maxItems + 15;

    this.props.dispatch(rcvMaxItems(maxItems));
  }

  render() {
    return (
      <View
        {...this.props}
        search={this.search.bind(this)}
        load={this.load.bind(this)}
        more={this.more.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar_resources } = state;

  return {
    resources: calendar_resources.resources,
    matches: calendar_resources.matches,
    maxItems: calendar_resources.maxItems
  };
};

export default connect(mapStateToProps)(CResources);
