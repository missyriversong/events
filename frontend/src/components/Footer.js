import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col><Image src="/image/elogo.png" width="10%" /> &copy; 2023 </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer