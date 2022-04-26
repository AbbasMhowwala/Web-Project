import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const investing = () => {
  return (
    <div className='investing'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='section-1'>
                        <div className='content'>
                            <h4>Saving and investing was never so fun and breeeezyyyy!</h4>
                            <p>Invest to load your treasure chest in a fun way!</p>
                            <Link to="/"><Button className='btn investing-btn'>Sign Up</Button></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default investing