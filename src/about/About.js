import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <p>
          UPEM APP is a website allowing to regroup different UPEM services such
          as Calendar or mail. This website use the UPEM API and UPEM SDK
          available on Github.
        </p>

        <p>
          The author and only developper of the project is Vincent Rasquier.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
