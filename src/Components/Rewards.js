import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Rewards = () => {
    return (
        <div className='rewards mt-5'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='section-2'>
                            <div className='content'>
                                <h4>Changing the World’s Outlook Towards Saving and Investing.</h4>
                                <p>Cuz this time it’s Fun, Rewarding, and Simple.</p>
                                <Link to="/"><Button className='btn investing-btn'>Sign Up</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Rewards