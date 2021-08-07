import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { chonGheAction } from '../../../redux/action/ticketAction';

class DanhSachGhe extends Component {
    render() {
        const { ticket, chonGhe } = this.props;
        return (
            <Container className="my-3" style={{ backgroundColor: '#ffffff10' }}>
                <Row className="p-3 gy-3">
                    {ticket.ticketList.map((ghe) => {
                        let variant;
                        switch (ghe.trangThai) {
                            case 'DA_CHON':
                                variant = 'outline-success';
                                break;

                            case 'DA_DAT':
                                variant = 'outline-danger';
                                break;

                            case 'TRONG':
                                variant = 'outline-warning';
                                break;

                            default:
                                break;
                        }
                        return (
                            <Col
                                className="col-1 p-0 d-flex justify-content-center"
                                key={ghe.soGhe}
                            >
                                <Button
                                    type="button"
                                    variant={variant}
                                    className="rounded-0 focus-box-shadow-none active"
                                    style={{ width: '60px' }}
                                    onClick={() => {
                                        ghe.trangThai !== 'DA_DAT'
                                            ? chonGhe(ghe.soGhe)
                                            : alert('Da co nguoi dat');
                                    }}
                                >
                                    {ghe.soGhe}
                                </Button>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ticket: state.ticketState,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (soGhe) => {
            dispatch(chonGheAction(soGhe));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
