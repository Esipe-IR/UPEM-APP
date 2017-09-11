import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SingleDatePicker } from "react-dates";
import BigCalendar from "react-big-calendar";

import Event from "./Event";
import EventModal from "./EventModal";
import Toolbar from "./Toolbar";
import MyWeek from "./MyWeek";

import "react-dates/lib/css/_datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const View = props => (
  <Container fluid>
    <Row className="mt-3">
      <Col sm={12} className="text-center">
        <h1>{props.resource.name}</h1>
        <p>{props.resource.category}</p>

        <SingleDatePicker
          focused={props.focused}
          date={props.day}
          placeholder="Date"
          showDefaultInputIcon={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          onDateChange={props.onDateChange}
          onFocusChange={props.onFocusChange}
        />
      </Col>
    </Row>

    <Row className="m-2">
      <Col sm={12}>
        <BigCalendar
          date={props.day.toDate()}
          events={props.getEvents(props.resource.events)}
          views={{day: true, week: MyWeek}}
          view={props.view}
          min={new Date(2017, 3, 30, 8)}
          max={new Date(2017, 3, 30, 19)}
          startAccessor={props.startAccessor}
          endAccessor={props.endAccessor}
          onNavigate={props.onNavigate}
          onView={props.onView}
          onSelecting={props.onClick}
          onSelectEvent={props.onClick}
          components={{
            eventWrapper: Event,
            toolbar: Toolbar
          }}
        />
      </Col>
    </Row>
    <EventModal />
  </Container>
);

export default View;
