import client from './client';

const userId = 'userId';

export const write = ({ category, text }) =>
  client.post('http://localhost:8000/users/' + userId + '/posts', {
    category,
    text,
  });
