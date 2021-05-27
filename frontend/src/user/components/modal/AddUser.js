import React, { createRef } from 'react';
import { Modal, Form, Button, Col } from 'react-bootstrap';

const AddUser = props => {
  const addRef = createRef();
  const onSubmitAddUser = e => {
    e.preventDefault();
    e.target.className += " was-validated";

    addRef.current.email.value = !checkEmail(addRef.current.email.value) && "";
    addRef.current.pass.value = !checkPassword(addRef.current.pass.value) && "";

    const addUser = {
      username: addRef.current.name.value,
      email: addRef.current.email.value && checkEmail(addRef.current.email.value),
      full_name: addRef.current.fullName.value,
      password: addRef.current.pass.value && checkPassword(addRef.current.pass.value),
      role: addRef.current.role.value
    }
    addUser.email && addUser.password && props.save(addUser);
  }

  const checkEmail = (email) => {
    return email && email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  }

  const checkPassword = (pass) => {
    return pass && pass.length > 5;
  }

  return (
    < Modal show={props.show} onHide={props.onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>

      <Form className="needs-validation" noValidate ref={addRef} onSubmit={onSubmitAddUser}>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="newName" placeholder="New User Name" required />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name="newEmail" placeholder="Email" type="email" required />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="newFullName" placeholder="Full Name" required />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="pass">
                <Form.Label>Password</Form.Label>
                <Form.Control name="newPass" placeholder="Password should be over 6 letters" required />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="newRole" required>
                  <option value="STUDENT">Student</option>
                  <option value="TUTOR">Tutor</option>
                  <option value="ADMIN">Admin</option>
                </Form.Control>
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
            </Col>
          </Form.Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal >
  )
}

export default AddUser;