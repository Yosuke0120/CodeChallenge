import React, { useEffect, useState } from 'react';
import { UserApi } from '../../services/UserApi';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import AddUser from '../../components/modal/AddUser';
import UpdateUser from '../../components/modal/UpdateUser';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState();

  const [addShow, setAddShow] = useState(false);
  const handleAddShow = () => setAddShow(true);
  const handleAddClose = () => setAddShow(false);

  const [updateShow, setUpdateShow] = useState(false)
  const handleUpdateShow = user => {
    setUpdateShow(true);
    user && setUpdateUser(user);
  }
  const handleUpdateClose = () => setUpdateShow(false);

  useEffect(() => {
    UserApi.getAllUsers()
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const addNewUser = user => {
    user && UserApi.createUser(user).then(res => {
      setUsers([...users, user]);
      handleAddClose();
    });
  }

  const updateNewUser = (id, user) => {
    console.log('id', typeof id);
    user && UserApi.updateUser(id, user).then(async res => {
      const updateUsers = await UserApi.getAllUsers();
      setUsers(updateUsers);
      handleUpdateClose();
    });
  }

  const renderUsers = users.map((user, idx) => {
    return (
      <tr key={idx}>
        <td>{user.email}</td>
        <td>{user.full_name}</td>
        <td>{user.role}</td>
        <td>{user.created_at}</td>
        <td>
          <Button onClick={() => { handleUpdateShow(user) }}>More details</Button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={handleAddShow}>Add user</Button>
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
      <AddUser show={addShow} onHide={handleAddClose} save={addNewUser} />
      <UpdateUser show={updateShow} onHide={handleUpdateClose} selectedUser={updateUser} update={updateNewUser} />
    </>
  )
}
