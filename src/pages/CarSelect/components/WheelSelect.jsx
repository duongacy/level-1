import React, { Component } from 'react';
import {
    Card,
    Col,
    Container,
    Row,
    Image,
    Button,
    Table,
  } from "react-bootstrap";

export default class WheelSelected extends Component {
    render() {
      const {wheel, callbackChange}= this.props;
        return (
            <Card>
              <Card.Header>Wheel</Card.Header>
              <Card.Body>
                <Button
                  onClick={() => callbackChange("wheel-1")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-secondary ${
                    wheel === "wheel-1" && "border-3"
                  }`}
                >
                  <Image src="images/icons/icon-wheel-1.jpg" height={40} />
                  <span className="mx-2">Wheel 1</span>
                </Button>
                <Button
                onClick={() => callbackChange("wheel-2")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-secondary ${
                    wheel === "wheel-2" && "border-3"
                  }`}
                >
                  <Image src="images/icons/icon-wheel-2.jpg" height={40} />
                  <span className="mx-2">Wheel 2</span>
                </Button>
                <Button
                onClick={() => callbackChange("wheel-3")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-secondary ${
                    wheel === "wheel-3" && "border-3"
                  }`}
                >
                  <Image src="images/icons/icon-wheel-3.jpg" height={40} />
                  <span className="mx-2">Wheel-3</span>
                </Button>
              </Card.Body>
            </Card>
        )
    }
}
