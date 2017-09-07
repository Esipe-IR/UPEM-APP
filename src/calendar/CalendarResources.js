import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { askResources, askSearch } from "./redux/actions";
import Resource from "./sub/Resource";
import { logEvent } from "../services/analytics";

class CalendarResoucres extends React.Component {
  componentDidMount() {
    this.props.dispatch(askResources());
  }

  search(e) {
    e.preventDefault();
    let value = e.target[0].value;

    logEvent("resources_search", null, {
      search: value
    });

    this.props.dispatch(askSearch(value));
  }

  push(e) {
    e.preventDefault();
    let path = e.target.getAttribute("href", 2);
    let int = path.replace("/calendar/", "");
    int = parseInt(int, 10);

    logEvent("resources_clickView", int, {
      uri: path
    });

    this.props.dispatch(push(path));
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.search.bind(this)}>
              <div className="form-group">
                <div className="input-group stylish-input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-addon">
                    <button type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {this.props.resources.slice(0, 25).map(resource => (
            <div className="col-sm-4 col-xs-12 text-center" key={resource.id}>
              <Resource resource={resource} load={this.push.bind(this)} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state;

  return {
    resources: calendar.resources
  };
};

export default connect(mapStateToProps)(CalendarResoucres);
