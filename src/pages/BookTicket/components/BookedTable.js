import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { chonGheAction } from '../../../redux/action/ticketAction';

class BookedTable extends Component {
    render() {
        const { ticket, huyGhe } = this.props;
        const sum = ticket.selectedList.reduce((t, c) => {
            return t + c.gia;
        }, 0);
        return (
            <Container>
                <Row>
                    <table className="table table-dark table-hover px-3">
                        <thead>
                            <tr>
                                <th className="px-4 fs-5" scope="col">
                                    Seat
                                </th>
                                <th className="px-4 fs-5" scope="col">
                                    Price
                                </th>
                                <th className="px-4 fs-5" scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticket.selectedList.map((ghe) => (
                                <tr key={ghe.soGhe + 'xx'}>
                                    <td className="px-4">{ghe.soGhe}</td>
                                    <td className="px-4">{ghe.gia}</td>
                                    <td className="px-4" style={{ width: '200px' }}>
                                        <Button
                                            variant="danger"
                                            className="btn-sm focus-box-shadow-none rounded-0"
                                            onClick={() => huyGhe(ghe.soGhe)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            {ticket.selectedList.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="px-4">
                                        <h4>Please book seat</h4>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td className="px-4 fw-bold fs-5 text-primary">Summary</td>
                                <td className="px-4 text-warning" colSpan="2">
                                    {sum} USD
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (root) => {
    return {
        ticket: root.ticketState,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch(chonGheAction(soGhe));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookedTable);
