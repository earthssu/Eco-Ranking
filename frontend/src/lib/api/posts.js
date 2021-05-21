import client from './client';

export const write = ({ category, text }) => {
  client.post('http://localhost:8000/users/' + '/posts/', {
    category,
    text,
  });
};
