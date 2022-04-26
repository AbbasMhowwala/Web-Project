import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='web-slider'>
            <Container className='p-0'>
                <Row>
                    <Col lg={12}>
                        <div className='slide-item'>
                            <h1>Making Saving and <br /> Investing <span className='fun'>Fun</span> </h1>
                        </div>
                        <Marquee className='slide-content'>
                        Get a chance to win up to AED 50,000 every month!
                        </Marquee>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Slider