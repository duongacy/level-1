import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class CarDetail extends Component {
  // props
  render() {
    const { color, price, engineType, displacement } = this.props.car;
    return (
      <Table responsive="sm">
        <tbody>
          <tr>
            <th>Color</th>
            <td>{color}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{price}</td>
          </tr>
          <tr>
            <th>Engine type</th>
            <td>{engineType}</td>
          </tr>
          <tr>
            <th>Displacement</th>
            <td>{displacement}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
