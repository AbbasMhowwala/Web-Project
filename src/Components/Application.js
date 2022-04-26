import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Application = () => {
    return (
        <div className='application mt-5'>
            <Container>
                <Row>
                    <Col lg={10} className='m-auto text-white'>
                        <div className='launch-sec'>
                            <div className='content text-center'>
                                <h1 className='mb-3'>Launching Soon!</h1>
                                <p>Join the waitlist and get 12 months of free subscription on RuDo App launch!</p>
                                <Link to="/"> <Button className='btn investing-btn'>Sign Up now!</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Application