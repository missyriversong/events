import React from 'react'
import testEvents from '../testEvents.js'
//test data
import Event from '../components/Event.js'
import {Col, Row} from 'react-bootstrap'


const HomeScreen = () => {
  return (
    <>
    <h1>Events near me</h1>
    <Row> 
      {testEvents.map(e => (
      <Col sm={12} md={6} lg={4} xl={3}>
      <Event event={e} />
      </Col>
    ))
    }
    </Row>
    </>
  )
}

export default HomeScreen

//take testData to loop through each element p, display it as, bind Component parameter to e for individ testData
