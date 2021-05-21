import client from './client';
import { useSelector } from 'react-redux';

export const write = ({ category, text }) => {
  client.post('http://localhost:8000/users/' + '/posts/', {
    category,
    text,
  });
};
