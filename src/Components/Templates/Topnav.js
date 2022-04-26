import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Topnav = () => {
    const [show, setShow] = useState(true);
    return (
        <div className='top-nav' style={{ display: show ? "block" : "none" }}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='topnav-text'>
                            <h1>Get a chance to win up to <strong className='border-dashed'>AED 50,000</strong> every month!</h1>
                            <svg style={{cursor: "pointer"}} onClick={() => setShow((s) => !s)} className='cancel-btn' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3.11719L19.8054 19.9225" stroke="white" stroke-width="5.30695" stroke-linecap="round" />
                                <path d="M3 19.9224L19.8054 3.11701" stroke="white" stroke-width="5.30695" stroke-linecap="round" />
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Topnav