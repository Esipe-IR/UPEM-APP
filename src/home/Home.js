import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>UPEM APP</h1>

            <Badge color="primary">Version: 2.0 Alpha</Badge>
          </Col>
        </Row>
      </Container>
    );
  }
}
