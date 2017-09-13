import React from "react";
import { connect } from "react-redux";
import {
  rcvView,
  rcvDay,
  rcvWeek,
  rcvFocused,
  rcvModal,
  rcvResource,
  askResource
} from "./redux/actions";
import {
  getFirstWeekDay,
  getLastWeekDay,
  getToday,
  getMomentFromDate,
  getWeekNb
} from "../../services/date";
import { eventToDate } from "../../services/format";
import { logEvent } from "../../services/analytics";
import View from "./view";

class CEvents extends React.Component {
  componentDidMount() {
    const today = getToday();
    const week = getWeekNb(today);
    const view = window.innerWidth > 900 ? "week" : "day";
    const resource = this.props.match.params.resource;

    this.props.dispatch(rcvResource({}));
    this.props.dispatch(rcvView(view));
    this.props.dispatch(rcvWeek(week));
    this.props.dispatch(
      askResource({
        resource,
        startDate: getFirstWeekDay(today),
        endDate: getLastWeekDay(today)
      })
    );
  }

  onDateChange(day) {
    this.props.dispatch(rcvDay(day));

    const week = getWeekNb(day);
    const resource = this.props.match.params.resource;

    logEvent("event_change_date", parseInt(resource, 10), {
      resource: resource,
      date: day.format("MM/DD/YYYY")
    });

    if (this.props.week !== week) {
      this.props.dispatch(rcvWeek(week));
      this.props.dispatch(
        askResource({
          resource,
          startDate: getFirstWeekDay(day),
          endDate: getLastWeekDay(day)
        })
      );
    }
  }

  onFocusChange(e) {
    this.props.dispatch(rcvFocused(e.focused));
  }

  onNavigate(date) {
    const day = getMomentFromDate(date);
    this.onDateChange(day);
  }

  onView(view) {
    const resource = this.props.match.params.resource;

    logEvent("event_change_view", parseInt(resource, 10), {
      resource: resource,
      view: view
    });

    this.props.dispatch(rcvView(view));
  }

  startAccessor(e) {
    const date = eventToDate(e);
    date.setHours(parseInt(e.startHour[0] + e.startHour[1], 10));
    date.setMinutes(parseInt(e.startHour[3] + e.startHour[4], 10));

    return date;
  }

  endAccessor(e) {
    const date = eventToDate(e);
    date.setHours(parseInt(e.endHour[0] + e.endHour[1], 10));
    date.setMinutes(parseInt(e.endHour[3] + e.endHour[4], 10));

    return date;
  }

  onClick(e) {
    const resource = this.props.match.params.resource;

    logEvent("event_click_event", parseInt(resource, 10), {
      resource: resource,
      evt: e.name + "/" + e.date + "/" + e.startHour
    });

    this.props.dispatch(rcvModal(e));
  }

  getEvents(events) {
    if (events && events.length) return events;
    else return [];
  }

  render() {
    return (
      <View
        {...this.props}
        onDateChange={this.onDateChange.bind(this)}
        onFocusChange={this.onFocusChange.bind(this)}
        getEvents={this.getEvents.bind(this)}
        startAccessor={this.startAccessor}
        endAccessor={this.endAccessor}
        onNavigate={this.onNavigate.bind(this)}
        onView={this.onView.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar_events } = state;

  return {
    view: calendar_events.view,
    day: calendar_events.day,
    week: calendar_events.week,
    focused: calendar_events.focused,
    events: calendar_events.events,
    resource: calendar_events.resource
  };
};

export default connect(mapStateToProps)(CEvents);
