import React  from 'react'
import { Card ,CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Book.css'
import axios from "axios";

export default function Books() {
 
  return (
    <div className="div1">

<CardGroup>
  <Card className='book1'>
    <Card.Img variant="top" src="https://www.neelwafurat.com/images/lb/abookstore/covers/normal/308/308362.jpg" height="500px" width="300px" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='book1'>
    <Card.Img variant="top" src="https://www.neelwafurat.com/images/lb/abookstore/covers/normal/308/308362.jpg" height="500px" width="300px" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='book1'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
   
    </div>
  )}