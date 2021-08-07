import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import BookedTable from './components/BookedTable';
import DanhSachGhe from './components/DanhSachGhe';

export default class BookTicket extends Component {
    render() {
        return (
            <div
                style={{
                    flex: 'auto',
                    background: "url('images/bookTicket/banner.jpg') no-repeat",
                    backgroundSize: 'cover',
                }}
                className="py-5"
            >
                <h1 className="text-white text-uppercase text-center">Movie seat selection</h1>
                <Container className="my-4">
                    <div className="d-inline-flex gap-2 me-4">
                        <Button
                            type="button"
                            variant="outline-warning"
                            className="rounded-0 focus-box-shadow-none active"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span
                            className="text-light"
                            style={{ lineHeight: '30px', display: 'inline-block' }}
                        >
                            Ghế trống
                        </span>
                    </div>
                    <div className="d-inline-flex gap-2 me-4">
                        <Button
                            type="button"
                            variant="outline-primary"
                            className="rounded-0 focus-box-shadow-none active"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span
                            className="text-light"
                            style={{ lineHeight: '30px', display: 'inline-block' }}
                        >
                            Đã chọn
                        </span>
                    </div>
                    <div className="d-inline-flex gap-3 my-1">
                        <Button
                            type="button"
                            variant="outline-danger"
                            className="rounded-0 focus-box-shadow-none active"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span
                            className="text-light"
                            style={{ lineHeight: '30px', display: 'inline-block' }}
                        >
                            Đã đặt
                        </span>
                    </div>
                </Container>

                <DanhSachGhe />
                <BookedTable/>
            </div>
        );
    }
}
