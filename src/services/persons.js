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
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error);
    });
};


const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      return handleError(error);
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
    // If response has data, use the error message from the server
    if (error.response.data && error.response.data.error) {
      return Promise.reject(new Error(error.response.data.error));
    }
    // Otherwise, provide a general error message
    return Promise.reject(new Error('Server responded with error: ' + error.response.statusText));
  } else if (error.request) {
    // If no response was received
    return Promise.reject(new Error('No response received from the server'));
  } else {
    // If there was an error in setting up the request
    return Promise.reject(new Error('Error in request setup: ' + error.message));
  }
};


export default { getAll, create, update, remove };
