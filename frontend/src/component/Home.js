import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 const Home = () => {
  return (
    <>    
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
     height="600px" width="600px"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      height="600px" width="600px"

      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           height="600px" width="600px"

      alt="Third slide"
    />
 
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Home;