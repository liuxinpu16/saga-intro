import axios from "axios";

export const getUsers = () => {
  return axios.get("http://localhost:3000/");
};

export const createUser = ({ firstName, lastName }) => {
  return axios.post("http://localhost:3000/", {
    firstName,
    lastName,
  });
};

export const deleteUser = ({ id }) => {
  return axios.delete(`http://localhost:3000/${id}`);
};
