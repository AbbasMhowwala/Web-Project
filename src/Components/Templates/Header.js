import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
const Header = () => {
    return (
        <div className='header-nav mt-5'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className='logo-section'>
                            <Image src={logo} className="logo" alt='Logo' />
                        </div>
                    </Col>
                    <Col lg={6} className="p-0">
                        <div className='header-btn'>
                            <Link to="/"><Button className='btn custom-btn me-3'>Sign Up now</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header