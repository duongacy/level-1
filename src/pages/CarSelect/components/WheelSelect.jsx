import React, { Component } from "react";
import { Card, Image, Button } from "react-bootstrap";
import { listWheel } from "../../../data/listWheel";

export default class WheelSelected extends Component {
  render() {
    const { wheel, callbackChange } = this.props;
    return (
      <ListWheelContainer>
        {listWheel.map((item) => (
          <ChangeButton
            item={item}
            callbackChange={callbackChange}
            isBorder={wheel === item.value}
          />
        ))}
      </ListWheelContainer>
    );
  }
}

const ListWheelContainer = ({ children }) => (
  <Card>
    <Card.Header>Select wheel</Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);

const ChangeButton = ({ callbackChange, item, isBorder }) => {
  return (
    <Button
      key={item.id + "a"}
      onClick={() => callbackChange(item.value)}
      variant="transparent"
      className={`d-block w-100 text-start my-1 rounded-0 border border-secondary focus-box-shadow-none ${
        isBorder && "border-3"
      }`}
      style={{transition:"all .1s"}}
    >
      <Image src={`images/icons/${item.urlImg}`} height={40} />
      <span className="mx-2">{item.title}</span>
    </Button>
  );
};
