import React, { Component, Fragment } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeGlassAction } from '../../../redux/action/glassAction';

class ListButton extends Component {
    render() {
        const {changeGlass, glass} = this.props;
        return (
            <div className="mt-5 mx-3 d-flex flex-wrap bg-white p-3 gap-2 justify-content-center">
                {glass.glassData.map((item, key) => (
                    <Button
                        key={key + 'glass-button'}
                        style={{ height: '60px' }}
                        className={`bg-white focus-box-shadow-none border rounded-0 p-1 ${glass.glassSelected.id === item.id && "border-3 border-warning"}`}
                        onClick={() => changeGlass(item.id)}
                    >
                        <Image src={item.url} height={50} />
                    </Button>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        glass: state.glassState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeGlass: (glassId) => {
            dispatch(changeGlassAction(glassId));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListButton);
