import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

function Dbook() {
  const [book, setBook] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    Dbook();
  }, []);

  const Dbook = async () => {
    try {
      const result = await axios.get(`http://localhost:5050/books/${_id}`);
      console.log(result);
      setBook(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MDBCard alignment="center">
        <MDBCardHeader>info about ( {book.title} )</MDBCardHeader>
        <MDBCardBody>
          <img src={book.image} />
          <MDBCardTitle>{book.price}</MDBCardTitle>
          <MDBCardText>{book.pages}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Dbook;
