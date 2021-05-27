import React, { createRef, useState } from 'react';
import { Modal, Form, Button, Col } from 'react-bootstrap';

const AddUser = props => {
  const [newUser, setNewUser] = useState();
  const addRef = createRef();
  const onSubmitAddUser = e => {
    e.preventDefault();
    const addUser = {
      username: addRef.current.name.value,
      email: addRef.current.email.value,
      full_name: addRef.current.fullName.value,
      password: addRef.current.pass.value,
      role: addRef.current.role.value
    }
    setNewUser(addUser);
    console.log('addUser', addUser);
  }



  return (
    < Modal show={props.show} onHide={props.onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>

      <Form noValidate ref={addRef} onSubmit={onSubmitAddUser}>
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
                <Form.Control name="newEmail" placeholder="Email"
                  required />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="newFullName" placeholder="Full Name"
                  required />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="pass">
                <Form.Label>Password</Form.Label>
                <Form.Control name="newPass" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  name="newRole"
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
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