import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Button,
  Table,
} from "react-bootstrap";

export default class CarSelect extends Component {
  render() {
    return (
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Image src="images/black/wheel-1.jpg" alt="" fluid />
            <Table responsive="sm mt-3">
              <thead>
                <h3> See more features</h3>
              </thead>
              <tbody>
                  <tr>
                      <th>Color</th>
                      <td>Black</td>
                  </tr>
                  <tr>
                      <th>Price</th>
                      <td>$20000</td>
                  </tr>
                  <tr>
                      <th>Engine type</th>
                      <td>Inline 4-Cylinder</td>
                  </tr>
                  <tr>
                      <th>Displacement</th>
                      <td>1996 cc</td>
                  </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={4} className="d-flex flex-column gap-3">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-black.jpg" height={40} />
                  <span className="mx-2">Black</span>
                </Button>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-red.jpg" height={40} />
                  <span className="mx-2">Red</span>
                </Button>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-silver.jpg" height={40} />
                  <span className="mx-2">Silver</span>
                </Button>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-steel.jpg" height={40} />
                  <span className="mx-2">Steel</span>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Wheel</Card.Header>
              <Card.Body>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-1.jpg" height={40} />
                  <span className="mx-2">Wheel 1</span>
                </Button>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-2.jpg" height={40} />
                  <span className="mx-2">Wheel 2</span>
                </Button>
                <Button
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-3.jpg" height={40} />
                  <span className="mx-2">Wheel-3</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
