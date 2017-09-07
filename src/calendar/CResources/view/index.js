import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import Resource from "./Resource";

const View = (props) => (
  <Container>
    <Row>
      <Col sm={12}>
        <Form onSubmit={props.search}>
          <FormGroup>
            <InputGroup className="stylish-input-group">
              <Input placeholder="Search" />
              <InputGroupAddon>
                <Button>
                  <i className="fa fa-search" aria-hidden="true" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </Col>
    </Row>
    
    <Row>
      {props.matches.slice(0, props.maxItems).map(resource => (
        <Col sm={4} xs={12} className="text-center mt-2" key={resource.id}>
          <Resource resource={resource} load={props.load} />
        </Col>
      ))}
    </Row>

    <Row className="m-3">
      <Col sm={12} className="text-center">
        <Button color="primary">Load more...</Button>
      </Col>
    </Row>
  </Container>
);

export default View;
