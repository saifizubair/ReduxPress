import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert"; // Import Alert component

const AddPage = () => {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertMessage] = useState(""); // New state for alert message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = form.title.value;
      const category = form.category.value;
      const description = form.description.value;

      // Validate and set errors incrementally
      let newErrors = {};

      if (!title.trim()) {
        newErrors.title = "Please provide a valid title";
      }

      if (!category.trim()) {
        newErrors.category = "Please provide a valid category";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        dispatch(addBlog({ id, title, category, description }));
        // Redirect to home page
        navigate("/");
      } else {
        // Display alert message for validation errors
        alert("Please Enter Valid Values");
      }
    }
  };

  return (
    <>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        BACK
      </Button>
      <Card className="w-100" border="primary" text="dark">
        <Card.Header>
          <h2 style={{ justifyContent: "center", textAlign: "center" }}>
            Add Blog
          </h2>
        </Card.Header>
        <Card.Body>
          {alertMessage && <Alert variant="danger">{alertMessage}</Alert>} {/* Display alert */}
          <div className="mx-auto col-12 col-lg-12">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Title"
                    isValid={validated && !errors.title}
                    isInvalid={errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                  
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter category"
                    autoComplete="off"
                    isValid={validated && !errors.category}
                    isInvalid={errors.category}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.category}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Describe your experience..."
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Fill All the Feilds
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddPage;
