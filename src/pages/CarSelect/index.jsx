import React, { Component } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarDetail from './components/CarDetail';
import ColorSelect from './components/ColorSelect';
import WheelSelect from './components/WheelSelect';
class CarSelect extends Component {
    render() {
        const { car } = this.props;
        return (
            <Container className='py-5'>
                <Row>
                    <Col lg={8}>
                        <Image
                            src={`images/car/${car.colorSelected}/${car.wheelSelected}.jpg`}
                            alt=""
                            fluid
                        />
                        <h3 className="mt-3"> See more features</h3>
                        <CarDetail />
                    </Col>
                    <Col lg={4} className="d-flex flex-column gap-3">
                        <ColorSelect />
                        <WheelSelect />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (root) => {
    return {
        car: root.carState,
    };
};

export default connect(mapStateToProps)(CarSelect);
