import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Col, Image, Row } from 'react-bootstrap';

class Models extends Component {
    render() {
        const { glassSelected } = this.props.glass;
        return (
            <Row>
                <Col md={6} className="d-flex justify-content-center">
                    <div style={{ width: 'fit-content', position: 'relative' }}>
                        <Image src="images/glass/model.jpg" height={300} />
                        <Image
                            src={glassSelected.url}
                            style={{
                                position: 'absolute',
                                left: '58px',
                                top: '71px',
                                width: '132px',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                backgroundColor: '#9400D370',
                            }}
                            className="py-2 px-4"
                        >
                            <h4 className="text-primary">{glassSelected.name}</h4>
                            <h6 className="text-light">{glassSelected.desc}</h6>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-center d-none d-md-block">
                    <Image src="images/glass/model.jpg" height={300} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (root) => {
    return {
        glass: root.glassState,
    };
};
export default connect(mapStateToProps)(Models);
