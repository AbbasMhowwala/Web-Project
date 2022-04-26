import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import launch from './Images/launchh.png'
import arrow from './Images/arrow.png'
import { Link } from 'react-router-dom'
const Launching = () => {
  return (
    <div className='launching mt-5 mb-5 p-5'>
      <Container>
        <Row className='m-auto justify-content-center'>
          <Col lg={4}>
            <div className='launching1'>
              <div className='content'>
                <h3>Keep that change. No, literally!</h3>
                <p>Your money, our brains! Choose a portfolio strategy tailored just for you!</p>
              </div>
              <Image src={launch} className='Money' />
            </div>
          </Col>
          <Col lg={2}>
            <div className='launching2'>
              <div className='content'>
                <h3>Invest Smart!</h3>
                <Image src={arrow} className='arrow' />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className='launching3'>
              <div className='content'>
                <h3>Salary Credited. <br />Salary Debited.</h3>
                <Image src={arrow} className='arrow' />

              </div>
            </div>
          </Col>
          <Col lg={2}>
            <Link to="/"><Button className='launch-btn'>Launching Soon</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Launching