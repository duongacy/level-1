import React, { Component, Fragment } from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listCar } from '../../../data/listCar';
import { changeColor } from '../../../redux/action/carAction';

class ColorSelect extends Component {
	render() {
		const { car, handleChangeColor } = this.props;
		return (
			<Card>
				<Card.Header>Select color</Card.Header>
				<Card.Body>
					{listCar.map((item) => (
						<Button
							key={item.id}
							onClick={() => handleChangeColor(item.color)}
							variant="transparent"
							className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
								car.colorSelected === item.color && 'border-dark border-3'
							} `}
							style={{
								transition: 'all .1s',
							}}
						>
							<Image src={`images/car/icons/icon-${item.color}.jpg`} height={40} />
							<span className="mx-2 text-uppercase">{item.color}</span>
						</Button>
					))}
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = (root) => {
	return {
		car: root.carState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeColor: (color) => {
			dispatch(changeColor(color));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelect);
