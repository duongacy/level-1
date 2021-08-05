import React, { Component, Fragment } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Button,
  Table,
} from "react-bootstrap";

export default class ColorSelect extends Component {
  render() {
    const { color, callbackChange } = this.props;
    return (
      <Fragment>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Button
              onClick={() => callbackChange("black")}
              variant="transparent"
              className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
                color === "black" && "border-dark border-3"
              } `}
            >
              <Image src="images/icons/icon-black.jpg" height={40} />
              <span className="mx-2">Black</span>
            </Button>
            <Button
              onClick={() => callbackChange("red")}
              variant="transparent"
              className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
                color === "red" && "border-danger border-3"
              } `}
            >
              <Image src="images/icons/icon-red.jpg" height={40} />
              <span className="mx-2">Red</span>
            </Button>
            <Button
              onClick={() => callbackChange("silver")}
              variant="transparent"
              className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
                color === "silver" && " border-3"
              } `}
            >
              <Image src="images/icons/icon-silver.jpg" height={40} />
              <span className="mx-2">Silver</span>
            </Button>
            <Button
              onClick={() => callbackChange("steel")}
              variant="transparent"
              className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
                color === "steel" && "border-secondary border-3"
              } `}
            >
              <Image src="images/icons/icon-steel.jpg" height={40} />
              <span className="mx-2">Steel</span>
            </Button>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
