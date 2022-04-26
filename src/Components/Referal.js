import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import money from './Images/money.png'
import referh from './Images/refer-and-win.png'
const Referal = () => {
  return (
    <div className='referal mt-5'>
        <Container>
            <Row>
                <Col lg={8} className='m-auto'>
                    <Image src={referh} className='Heading w-100 text-center' />
                    <div className='rewards-section'>
                        <Row className='align-items-center'>
                            <Col lg={6}>
                                <div className='contnent'>
                                    <h3>Refer & Earn AED50</h3>
                                    <p>Refer a friend and get AED50 added in your and your friend's RuDo Account!</p>
                                    <Link to="/"><Button className='btn investing-btn'>Refer Now</Button></Link>
                                    <Link to='/' className='text-decoration-none text-white d-block mt-3'>*Terms & Conditions </Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='image'>
                                    <Image src={money} className='money' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Referal