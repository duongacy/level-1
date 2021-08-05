import React, { Component } from 'react';
import {Card, Button, Image} from "react-bootstrap";

export default class ChangeColor extends Component {
    render() {
        const {callbackChange, selected} = this.props;
        return (
            <Card>
              <Card.Header>Color</Card.Header>
              <Card.Body>
                <Button
                  onClick={() => callbackChange("black")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-dark  ${selected ==="black" ? "border-3" : ""}`}
                >
                  <Image src="images/icons/icon-black.jpg" height={40} />
                  <span className="mx-2">Black</span>
                </Button>
                <Button
                  onClick={() => callbackChange("red")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-danger ${selected ==="red" ? "border-3" : ""}`}
                >
                  <Image src="images/icons/icon-red.jpg" height={40} />
                  <span className="mx-2">Red</span>
                </Button>
                <Button
                  onClick={() => callbackChange("silver")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border  ${selected ==="silver" ? "border-3" : ""}`}
                >
                  <Image src="images/icons/icon-silver.jpg" height={40} />
                  <span className="mx-2">Silver</span>
                </Button>
                <Button
                  onClick={() => callbackChange("steel")}
                  variant="transparent"
                  className={`d-block w-100 text-start my-1 rounded-0 border border-secondary  ${selected ==="steel" ? " border-3" : ""}`}
                >
                  <Image src="images/icons/icon-steel.jpg" height={40} />
                  <span className="mx-2">Steel</span>
                </Button>
              </Card.Body>
            </Card>
            
        )
    }
}
