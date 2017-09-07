import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SingleDatePicker } from "react-dates";
import BigCalendar from "react-big-calendar";

import Event from "./Event";
import EventModal from "./EventModal";
import Toolbar from "./Toolbar";

import "react-dates/lib/css/_datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const View = props => (
  <Container fluid>
    <Row>
      <Col sm={12} className="text-center">
        <SingleDatePicker
          focused={this.props.focused}
          date={this.props.day}
          numberOfMonths={1}
          withFullScreenPortal={true}
          isOutsideRange={() => false}
          onDateChange={this.onDateChange.bind(this)}
          onFocusChange={this.onFocusChange.bind(this)}
        />
      </Col>
    </Row>

    <Row className="mt-5">
      <Col sm={12}>
        <BigCalendar
          date={this.props.day.toDate()}
          events={this.getEvents(this.props.events)}
          views={["day", "week"]}
          view={this.props.view}
          min={new Date(2017, 3, 30, 8)}
          max={new Date(2017, 3, 30, 19)}
          startAccessor={this.startAccessor}
          endAccessor={this.endAccessor}
          onNavigate={this.onNavigate.bind(this)}
          onView={this.onView.bind(this)}
          onSelecting={this.onClick.bind(this)}
          onSelectEvent={this.onClick.bind(this)}
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
