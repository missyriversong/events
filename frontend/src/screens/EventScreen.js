import React from 'react'
import testEvents from '../testEvents.js'
import {useParams, Link} from 'react-router-dom'
import {Container, Image, Row, Col, Button} from 'react-bootstrap'

//add tag array
//add organizer info but this would be attached to organizer component...

const EventScreen = () => {
  const paramas = useParams();
  const event = testEvents.find(e => e._id === paramas.id)

  return (
    <>
     <Container className="p-2">
    <Link to="/"><Button variant="light">Go Back</Button></Link>
    </Container>

    <Container className="p-2">
    <Image src={event.image} rounded />
    </Container>
    
    <Container className="p-2">
      <Col md={6}>{event.name}</Col>
      <Col md={3}> Reserve a spot</Col>
    </Container>

    <Container className="p-2">

    <Row>Date and Time</Row>
    <Row>{event.date}, {event.startTime}-{event.endTime}</Row>
    <Row>Location</Row>
    <Row>{event.venue}</Row>
    <Row>{event.address}, {event.city}, {event.state}, {event.zipCode}</Row>
    <Row>About</Row>
    <Row>{event.description}</Row>
  
    </Container>
    </>
  )
}

export default EventScreen



