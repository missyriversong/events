import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


//* <i class="fa-regular fa-heart"></i> 
//param is object != {{ }}
//   let costYes = false; { costYes ? <Card.Text as='div'> {event.minCost} </Card.Text> : <Card.Text as='div'> Free </Card.Text> }

const Event = ({event}) => {


  return (
    <> 
      <Card className='my-5 p-3'>
      <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant="top" />
        </Link>
        <Card.Body>
        <Link to={`/event/${event._id}`}>
        <Card.Title as='div'> {event.name}</Card.Title>
        </Link>
        <Card.Text as='div'>{event.date}, {event.startTime}-{event.endTime} </Card.Text>
        <Card.Text as='div'> ${event.minCost} </Card.Text>
        <Card.Text as='div'>{event.venue},  {event.address}, {event.city} </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Event

