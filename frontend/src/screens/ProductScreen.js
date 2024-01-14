import React from 'react'
import testEvents from '../testEvents.js'
import {useParams, Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'


// <Row> <Image src={event.image} rounded /></Row>
// <Row>
//   <Col md={6}>{event.name}</Col>
//   <Col md={3}> Reserve a spot</Col>
// </Row>

// <Row>
//   <h3>Date and Time</h3>
//   {event.date}, {event.startTime}-{event.endTime}
//   <h3>Location</h3>
//   {event.venue}
//   {event.address}, {event.city}, {event.state}, {event.zipCode}
//   <h3>About</h3>
//   {event.description}
// </Row>

//add tag array
//add organizer info but this would be attached to organizer component...

const ProductScreen = () => {
  const paramas = useParams();
  const event = testEvents.find(e => e._id === paramas.id)

  return (
    <>
      <Link className='btn btn-info' to='/'> Return to events...</Link>

      <Row>
        <Col><h2>{event.name}</h2></Col>
      </Row>
    </>
  )
}

export default ProductScreen



