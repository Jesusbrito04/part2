import axios from "axios";

const baseUrl = `http://localhost:3001/persons`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const remove = (id, removeObj) => {
  const request = axios.delete(`${baseUrl}/${id}`, removeObj);
  return request.then((response) => response.data);
};

const update = (id, updateObj) => {
  const url = `http://localhost:3001/persons/${id}`;
  return axios.put(url, updateObj);
};

export default { getAll, create, remove, update };
