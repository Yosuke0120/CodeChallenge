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

    updateRef.current.email.value = checkEmail(updateRef.current.email.value) ? updateRef.current.email.value : "";
    updateRef.current.pass.value = checkPassword(updateRef.current.pass.value) ? updateRef.current.pass.value : "";

    const updateUser = {
      username: updateRef.current.name.value,
      email: updateRef.current.email.value,
      full_name: updateRef.current.fullName.value,
      password: updateRef.current.pass.value,
      role: updateRef.current.role.value
    }
    updateRef.email && updateRef.password && props.update(props.selectedUser._id, updateUser);
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
                <Form.Control name="newPass" placeholder="Password should be over 6 letters" required defaultValue={props.selectedUser ? props.selectedUser.password : ""} />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="newRole" required defaultValue={props.selectedUser ? props.selectedUser.role : "student"}>
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
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal >
  )
}

export default UpdateUser;