import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Book.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);


  useEffect(() => {
    allBooks();
  }, []);

  const allBooks = async () => {
    try {
      const result = await axios.get("http://localhost:5050/books");
      console.log(result.data);
      setBooks(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const del = (event) => {
    event.preventDefault();
    deleteBooks();
  };

  //delete inquiry
  const deleteBooks = async (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "هل انت متأكد من حذف الاسفسار؟",
        text: "!لن تتمكن من التراجع عن هذا",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "حذف",
        cancelButtonText: "الغاء",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "تم الحذف",
            "تم حذف اسفسارك",
            "success"
          );
          await axios.delete(`http://localhost:5050/books/delete/${_id}`, {});
          // del();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("الغاء", "استفسارك بأمان (:", "error");
        }
      });

  };

 //update
 const updateBooks = async (e) => {
  e.preventDefault();
  // console.log("complete... ", e.target.completed.value);
  await axios.put(`http://localhost:5050/books/update`,
    {
      title: e.target.title.value,
      price: e.target.price.value,
      pages: e.target.pages.value,
    },
    {}
  );
  // console.log(result.data);
  window.location.reload(false);

};


  return (
    <div className="div1">
      <Row xs={1} md={4} className="g-2">
        {books.map((bk, i) => {
          return (
            <div key={i}>
              <Col>
                <Card
                  style={{
                    width: "300px",
                    margin: "20px",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    height="300px"
                    src={bk.image}
                    onClick={() => navigate(`/Dbook/${bk._id}`)}
                  />
                  <Card.Body>
                    <Card.Title>{bk.title}</Card.Title>
                    <Card.Text>{bk.pages}</Card.Text>
                    <Card.Text>{bk.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <p onClick={() => deleteBooks(bk._id, del)}>x</p>
              <p
                        onClick={() => setEdit(true)}
                        style={{
                          cursor: "pointer",
                          float: "right",
                          fontSize: "13px",
                        }}
                      >
                        ⚙️
                      </p>

                      
            </div>
            
          );
        })}
      </Row>
      {edit ? (
          <div className="edit">
            {books.map((item) => (
              <form onSubmit={updateBooks}>
                <div key={item._id} className="card">
                  <div className="input">
                    <input className="input-field" type="text" name="title" defaultValue={item.title} />
                  </div>
                  {/* <div className="input">
                    <input className="input-field" type="text" name="city" defaultValue={item.city} />
                  </div> */}
                  
                <select name="completed">
                  <option value="مكتمل">مكتمل</option>
                  <option value="غير مكتمل">غير مكتمل</option>
                </select>
                <div className="action">
                <button  className="action-button"  type="submit">حفظ</button>
                <button
                 style={{ backgroundColor: "grey", margin: "10px" }}
                 className="action-button"
                 onClick={() => setEdit(false)}>الغاء</button>
                </div>
                </div>
              </form>
              
            ))}
          </div>
        ) : (
          <></>
        )}
    </div>
  );
}
