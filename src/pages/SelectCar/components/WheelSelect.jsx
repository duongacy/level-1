import React, { Component } from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listWheel } from '../../../data/listWheel';
import { changeWheelAct } from '../../../redux/action/carAction';

class WheelSelect extends Component {
    render() {
        const { changeWheel, car } = this.props;
        return (
            <ListWheelContainer>
                {listWheel.map((item) => (
                    <Button
                        key={item.id + 'a'}
                        onClick={() => changeWheel(item.value)}
                        variant="transparent"
                        className={`d-block w-100 text-start my-1 rounded-0 border border-secondary focus-box-shadow-none ${
                            car.wheelSelected === item.value && 'border-3'
                        }`}
                        style={{ transition: 'all .1s' }}
                    >
                        <Image src={`images/car/icons/${item.urlImg}`} height={40} />
                        <span className="mx-2">{item.title}</span>
                    </Button>
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

const mapStateToProps = (root) => {
    return {
        car: root.carState,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeWheel: (wheel) => {
            dispatch(changeWheelAct(wheel));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WheelSelect);
