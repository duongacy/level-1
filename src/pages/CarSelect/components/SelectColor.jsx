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

export default class SelectColor extends Component {
  render() {
    const { callbackChange } = this.props;
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Button
            onClick={() => callbackChange("black")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border ${
              this.props.colorSelected === "black" && "border-danger border-3"
            }`}
          >
            <Image src="images/icons/icon-black.jpg" height={40} />
            <span className="mx-2">Black</span>
          </Button>
          <Button
            onClick={() => callbackChange("red")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border ${
                this.props.colorSelected === "red" && "border-danger border-3"
            }`}
          >
            <Image src="images/icons/icon-red.jpg" height={40} />
            <span className="mx-2">Red</span>
          </Button>
          <Button
            onClick={() => callbackChange("silver")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border ${
                this.props.colorSelected === "silver" && "border-danger border-3"
            }`}
          >
            <Image src="images/icons/icon-silver.jpg" height={40} />
            <span className="mx-2">Silver</span>
          </Button>
          <Button
            onClick={() => callbackChange("steel")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border ${
                this.props.colorSelected === "steel" && "border-danger border-3"
            }`}
          >
            <Image src="images/icons/icon-steel.jpg" height={40} />
            <span className="mx-2">Steel</span>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
