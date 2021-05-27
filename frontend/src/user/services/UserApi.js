import axios from 'axios';

const prefix = 'users';

const getAllUsers = async () => {
  return axios.get(`${prefix}`)
    .then((res) => {
      return res.data;
    })
}

const getUser = async (id) => {
  return axios.get(`${prefix}/${id}`)
    .then((res) => {
      return res.data;
    })
}

const updateUser = async (id, user) => {

  return axios.put(`${prefix}/${id}`, user)
    .then((res) => {
      return res.data;
    })
}

const createUser = async (user) => {
  return axios.post(`${prefix}`, user)
    .then((res) => {
      return res.data;
    })
}

const deleteUser = async (id) => {
  return axios.delete(`${prefix}/${id}`);
}

export const UserApi = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}
