import React from "react";
import { Row, Col, Button } from "reactstrap";

const onClickPrevious = props => {
  if (props.view === "week") {
    return props.onNavigate(props.date.setDate(props.date.getDate() - 7));
  }

  return props.onNavigate(props.date.setDate(props.date.getDate() - 1));
};

const onClickNext = props => {
  if (props.view === "week") {
    return props.onNavigate(props.date.setDate(props.date.getDate() + 7));
  }

  return props.onNavigate(props.date.setDate(props.date.getDate() + 1));
};

const Toolbar = props => (
  <Row className="justify-content-between mb-3">
    <Col sm={4}>
      <Button
        outline
        color="primary"
        className="mr-2"
        onClick={() => onClickPrevious(props)}
      >
        Prev.
      </Button>
      <Button outline color="primary" onClick={() => onClickNext(props)}>
        Next
      </Button>
    </Col>

    <Col sm={4} className="text-right">
      <Button
        color="primary"
        outline={props.view !== "day"}
        className="mr-2"
        onClick={() => props.onViewChange("day")}
      >
        Day
      </Button>
      <Button
        color="primary"
        outline={props.view !== "week"}
        onClick={() => props.onViewChange("week")}
      >
        Week
      </Button>
    </Col>
  </Row>
);

export default Toolbar;
