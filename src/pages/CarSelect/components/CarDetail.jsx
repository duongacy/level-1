import React, { Component } from 'react';
import {Table} from "react-bootstrap";

export default class CarDetail extends Component {
    render() {
        return (
            <Table responsive="sm">
              <tbody>
                <tr>
                  <th>Color</th>
                  <td>{this.props.car.color}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>${this.props.car.price}</td>
                </tr>
                <tr>
                  <th>Engine type</th>
                  <td>{this.props.car.engineType}</td>
                </tr>
                <tr>
                  <th>Displacement</th>
                  <td>{this.props.car.displacement} cc</td>
                </tr>
              </tbody>
            </Table>
        )
    }
}
