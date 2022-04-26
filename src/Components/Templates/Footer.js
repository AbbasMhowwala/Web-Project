import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../Images/logo.png'
import insta from '../Images/insta.png'
import lin from '../Images/lin.png'
import twitter from '../Images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <div className='logo-section'>
                            <Image src={logo} className="logo d-block text-center m-auto" alt='Logo' />
                            <Link to="/"><Button className='btn investing-btn'>Sign Up Now</Button></Link>
                        </div>
                        <ul className='list-inline d-flex justify-content-center mt-3'>
                            <li className='me-3'><Link to="/"><Image src={twitter} /></Link></li>
                            <li className='me-3'><Link to="/"><Image src={lin} /></Link></li>
                            <li className='me-3'><Link to="/"><Image src={insta} /></Link></li>
                        </ul>
                        <p><b>Copyright© 2022. RuDo Wealth. All rights reserved.</b></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer