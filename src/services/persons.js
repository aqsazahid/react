import axios from 'axios';

const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(error => {
      handleError(error);
    });
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
    .then(response => response.data)
    .catch(error => {
      handleError(error);
    });
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
    .catch(error => {
      handleError(error);
    });
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(response => response.data)
    .catch(error => {
      handleError(error);
    });
};

const handleError = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      return Promise.reject(new Error('Resource not found'));
    }
    return Promise.reject(new Error('Server responded with error: ' + error.response.statusText));
  } else if (error.request) {
    return Promise.reject(new Error('No response received from the server'));
  } else {
    return Promise.reject(new Error('Error in request setup: ' + error.message));
  }
};

export default { getAll, create, update, remove };
