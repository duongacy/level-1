import React, { Component } from 'react';
import {Table} from "react-bootstrap";

export default class CarDetail extends Component {
    render() {
        const {car} =  this.props;
        return (
            <Table responsive="sm">
              <tbody>
                <tr>
                  <th>Color</th>
                  <td>{car.color}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{car.price}</td>
                </tr>
                <tr>
                  <th>Engine type</th>
                  <td>{car.engineType}</td>
                </tr>
                <tr>
                  <th>Displacement</th>
                  <td>{car.displacement}</td>
                </tr>
              </tbody>
            </Table>
        )
    }
}
