import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { askResources, askSearch } from "./redux/actions";
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
    resources = parseInt(int, 10);

    logEvent("resources_click_view", resources, {
      uri: path
    });

    this.props.dispatch(push(path));
  }

  render() {
    return (
      <View
        {...this.props}
        search={this.search.bind(this)}
        load={this.load.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar_resources } = state;

  return {
    matches: calendar_resources.matches,
    maxItems: calendar_resources.maxItems
  };
};

export default connect(mapStateToProps)(CResources);
