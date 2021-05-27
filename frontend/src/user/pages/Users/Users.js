import React, { useEffect, useState } from 'react';
import { UserApi } from '../../services/UserApi';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

export function Users(props) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState();


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
        role: "STUDENT",
      }
    );
  }, []);

  const addNewUser = async () => {
    newUser && console.log(newUser);
  }

  const renderUsers = users.map((user) => {
    return <tr>
      <td>{user.email}</td>
      <td>{user.full_name}</td>
      <td>{user.role}</td>
      <td>{user.created_at}</td>
      <td>
        <Button>More details</Button>
      </td>
    </tr>
  })
  return (
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
  )
}
