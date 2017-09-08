import React from "react";
import { connect } from "react-redux";
import {
  rcvView,
  rcvDay,
  rcvWeek,
  rcvFocused,
  rcvModal,
  askEvents
} from "./redux/actions";
import {
  getFirstWeekDay,
  getLastWeekDay,
  getToday,
  getMomentFromDate,
  getWeekNb,
  getDayByWeek
} from "../../services/date";
import { eventToDate } from "../../services/format";
import { logEvent } from "../../services/analytics";
import View from "./view";

class CEvents extends React.Component {
  componentDidMount() {
    let f = getFirstWeekDay();
    let l = getLastWeekDay();
    let t = getToday();

    this.props.dispatch(rcvView(window.innerWidth > 900 ? "week" : "day"));
    this.props.dispatch(rcvDay(t));
    this.props.dispatch(rcvWeek(getWeekNb(t)));
    this.props.dispatch(
      askEvents({
        resources: this.props.match.params.resources,
        startDate: f,
        endDate: l
      })
    );
  }

  onDateChange(day) {
    let week = getWeekNb(day);
    this.props.dispatch(rcvDay(day));

    logEvent(
      "event_change_date",
      parseInt(this.props.match.params.resources, 10),
      {
        resources: this.props.match.params.resources,
        date: day.format("MM/DD/YYYY")
      }
    );

    if (this.props.week !== week) {
      this.props.dispatch(rcvWeek(week));
      this.props.dispatch(
        askEvents({
          resources: this.props.match.params.resources,
          startDate: getDayByWeek("lundi", week),
          endDate: getDayByWeek("vendredi", week)
        })
      );
    }
  }

  onFocusChange(e) {
    this.props.dispatch(rcvFocused(e.focused));
  }

  onNavigate(e) {
    let day = getMomentFromDate(e);
    this.onDateChange(day);
  }

  onView(view) {
    logEvent(
      "event_change_view",
      parseInt(this.props.match.params.resources, 10),
      {
        resources: this.props.match.params.resources,
        view: view
      }
    );

    this.props.dispatch(rcvView(view));
  }

  startAccessor(e) {
    let d = eventToDate(e);
    d.setHours(parseInt(e.startHour[0] + e.startHour[1], 10));
    d.setMinutes(parseInt(e.startHour[3] + e.startHour[4], 10));

    return d;
  }

  endAccessor(e) {
    let d = eventToDate(e);
    d.setHours(parseInt(e.endHour[0] + e.endHour[1], 10));
    d.setMinutes(parseInt(e.endHour[3] + e.endHour[4], 10));

    return d;
  }

  onClick(e) {
    logEvent(
      "event_click_event",
      parseInt(this.props.match.params.resources, 10),
      {
        resources: this.props.match.params.resources,
        evt: e.name + "/" + e.date + "/" + e.startHour
      }
    );

    this.props.dispatch(rcvModal(e));
  }

  getEvents(events) {
    let element = events[this.props.week];

    if (element && element.length) return element;
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
    events: calendar_events.events
  };
};

export default connect(mapStateToProps)(CEvents);
