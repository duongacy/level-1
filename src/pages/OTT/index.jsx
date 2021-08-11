import React, { Component } from 'react';
import { Col, Container, Row, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { playOTTAction, selectOTTAction } from '../../redux/action/OTTAction';

class OTTPage extends Component {
    render() {
        const { OTT, handleSelectOTT, handlePlayOTT } = this.props;
        return (
            <Container>
                <Row>
                    <Col md={6} className="position-relative">
                        <img src="images/OTT/player.png" className="img-fluid" alt="" />
                        <img
                            src={OTT.playerSelected.img}
                            className="position-absolute top-0 right-0"
                            width="50px"
                            alt=""
                        />
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={() => handleSelectOTT(1)}>
                                Keo
                            </Button>
                            <Button variant="secondary" onClick={() => handleSelectOTT(2)}>
                                Bua
                            </Button>
                            <Button variant="secondary" onClick={() => handleSelectOTT(3)}>
                                Bao
                            </Button>
                        </ButtonGroup>
                        <Button className="mx-2" onClick={handlePlayOTT}>
                            Play
                        </Button>
                    </Col>
                    <Col md={6} className="position-relative">
                        <img src="images/OTT/computer.png" className="img-fluid" alt="" />
                        <img
                            src={OTT.computerSelected.img}
                            alt=""
                            width="50px"
                            className="position-absolute top-0 left-0"
                        />
                    </Col>
                    <Col>
                        <p>Result: {OTT.result}</p>
                        <p>match:{OTT.match}</p>
                        <p>win:{OTT.win}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (root) => ({
    OTT: root.OTTState,
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectOTT: (id) => {
            dispatch(selectOTTAction(id));
        },
        handlePlayOTT: () => {
            dispatch(playOTTAction(null));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OTTPage);
