import axios from 'axios';
import host from './host';

export default url => {
  const instance = axios.create({
    baseURL: host,
    'Content-Type': 'application/json'
  });
  return {
    read: ({ token }) => {
      instance.get(`/${url}`, {
        headers: {
          Authorization: token
        }
      });
    },
    create: ({ token, data }) => {
      instance.post(`/${url}`, {
        data,
        headers: {
          Authorization: token
        }
      });
    },
    update: ({ token, id, data }) => {
      instance.put(`/${url}/${id}`, {
        data,
        headers: {
          Authorization: token
        }
      });
    },
    remove: ({ token, id }) => {
      instance.delete(`/${url}/${id}`, {
        headers: {
          Authorization: token
        }
      });
    }
  };
};
