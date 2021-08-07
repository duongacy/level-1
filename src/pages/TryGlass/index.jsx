import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeGlassAction } from '../../redux/action/glassAction';
import ListButton from './components/ListButton';
import Models from './components/Models';
class TryGlass extends Component {
    render() {
        return (
            <div style={{ background: `url("images/glass/bg-2.jpg") no-repeat`, backgroundSize:"cover" ,  minHeight:"100vh" }} className="py-5">
                <Container>
                    <Models />
                    <ListButton />
                </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(TryGlass);
