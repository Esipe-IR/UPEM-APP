import React from "react";
import { Card, CardBlock, CardTitle, Button } from "reactstrap";

const Resource = props => (
  <Card>
    <CardBlock>
      <CardTitle>{props.resource.name}</CardTitle>
      <Button onClick={() => props.load("/calendar/" + props.resource.id)}>
        See
      </Button>
    </CardBlock>
  </Card>
);

export default Resource;
