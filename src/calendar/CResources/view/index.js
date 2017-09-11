import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupButton,
  Button
} from "reactstrap";
import Resource from "./Resource";

const Display = props => {
  const { matches, maxItems, resources, load } = props;

  if (matches.length) {
    return matches.slice(0, maxItems).map(resource => (
      <Col sm={4} xs={12} className="text-center mt-2" key={resource.id}>
        <Resource resource={resource} load={load} />
      </Col>
    ));
  }

  if (!resources.length) {
    return (
      <Col sm={12} className="text-center">
        <i className="fa fa-spinner fa-spin fa-5x" />
      </Col>
    );
  }

  if (resources.length && !matches.length) {
    return (
      <Col sm={12} className="text-center">
        <i className="fa fa-times fa-5x" />
      </Col>
    );
  }
};

const View = props => (
  <Container>
    <Row className="mt-3">
      <Col sm={12}>
        <Form onSubmit={props.search}>
          <FormGroup>
            <InputGroup>
              <Input placeholder="Search" />
              <InputGroupButton>Search</InputGroupButton>
            </InputGroup>
          </FormGroup>
        </Form>
      </Col>
    </Row>

    <Row>{Display(props)}</Row>

    {props.matches.length > props.maxItems ? (
      <Row className="m-3">
        <Col sm={12} className="text-center">
          <Button color="primary" onClick={() => props.more()}>
            Load more...
          </Button>
        </Col>
      </Row>
    ) : null}
  </Container>
);

export default View;
