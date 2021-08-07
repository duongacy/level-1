import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class CarDetail extends Component {
	// props
	render() {
		// const { color, price, engineType, displacement } = this.props.car;
		const { carSelected } = this.props.car;
    console.log("aaaaa");
    console.log(carSelected);
		return (
			<Table responsive="sm">
				<tbody>
					<tr>
						<th>Color</th>
						<td>{carSelected.color}</td>
					</tr>
					<tr>
						<th>Price</th>
						<td>{carSelected.price}</td>
					</tr>
					<tr>
						<th>Engine type</th>
						<td>{carSelected.engineType}</td>
					</tr>
					<tr>
						<th>Displacement</th>
						<td>{carSelected.displacement}</td>
					</tr>
				</tbody>
			</Table>
		);
	}
}

const mapStateToProps = (root) => {
	return {
		car: root.carState,
	};
};
export default connect(mapStateToProps)(CarDetail);
