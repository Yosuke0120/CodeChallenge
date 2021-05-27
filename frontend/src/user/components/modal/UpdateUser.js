import React, { createRef, useEffect } from 'react';
import { Modal, Form, Button, Col } from 'react-bootstrap';

const UpdateUser = props => {
  useEffect(() => {
    console.log('props', props.selectedUser)
  }, [props.selectedUser])
  const updateRef = createRef();
  const onSubmitUpdateUser = e => {
    e.preventDefault();
    e.target.className += " was-validated";
    const updateUser = {
      username: updateRef.current.name.value,
      email: updateRef.current.email.value,
      full_name: updateRef.current.fullName.value,
      password: updateRef.current.pass.value,
      role: updateRef.current.role.value
    }
    props.update(props.selectedUser._id, updateUser);
  }

  return (
    < Modal show={props.show} onHide={props.onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Form className="needs-validation" noValidate ref={updateRef} onSubmit={onSubmitUpdateUser}>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="newName" placeholder="New User Name" required defaultValue={props.selectedUser ? props.selectedUser.username : ""} />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name="newEmail" placeholder="Email" type="email" required defaultValue={props.selectedUser ? props.selectedUser.email : ""} />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="newFullName" placeholder="Full Name" required defaultValue={props.selectedUser ? props.selectedUser.full_name : ""} />
                <div className="invalid-feedback">
                  <div className="fieldError"> Invalid value.</div>
                </div>
              </Form.Group>
              <Form.Group controlId="pass">
                <Form.Label>Password</Form.Label>
                <Form.Control name="newPass" placeholder="Password" required defaultValue={props.selectedUser ? props.selectedUser.password : ""} />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="newRole" required defaultValue={props.selectedUser ? props.selectedUser.role : "student"}>
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
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal >
  )
}

export default UpdateUser;