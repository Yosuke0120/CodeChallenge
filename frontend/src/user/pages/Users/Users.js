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
    user && UserApi.updateUser(id, user).then(async res => {
      const updateUsers = await UserApi.getAllUsers();
      setUsers(updateUsers);
      handleUpdateClose();
    });
  }

  const delUser = user => {
    user && UserApi.deleteUser(user._id);
    setUsers(users.filter(person => person._id !== user._id));
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
          <Button variant="danger" className="ml-2" onClick={() => { delUser(user) }}>Delete</Button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-end my-4"><Button onClick={handleAddShow}>Add user</Button></div>
            <Table striped bordered hover>
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
