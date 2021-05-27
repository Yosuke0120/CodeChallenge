import React, { useEffect, useState } from 'react';
import { UserApi } from '../../services/UserApi';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import AddUser from '../../components/modal/AddUser';

export function Users(props) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState();

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    UserApi.getAllUsers()
      .then((users) => {
        setUsers(users);
      });
    setNewUser(
      {
        username: "jhondoe",
        email: "jhondoe@email.com",
        full_name: "Jhon Doe",
        password: "jhondoe123",
        role: "STUDENT",
      }
    );
  }, [users]);

  const addNewUser = async () => {
    // newUser && await UserApi.createUser(newUser)
    handleShow();
  }

  const renderUsers = users.map((user, idx) => {
    return (
      <tr key={idx}>
        <td>{user.email}</td>
        <td>{user.full_name}</td>
        <td>{user.role}</td>
        <td>{user.created_at}</td>
        <td>
          <Button>More details</Button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={addNewUser}>Add user</Button>
            <Table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderUsers}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddUser show={show} onHide={handleClose} />
    </>
  )
}
