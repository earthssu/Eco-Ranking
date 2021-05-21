import client from './client';

export const login = ({ username, password }) => {
  client.post('http://localhost:8000/auth/login/', { username, password });
};

export const register = ({ username, password, area, school }) => {
  client.post('http://localhost:8000/auth/register/', {
    username,
    password,
    area,
    school,
  });
};

export const check = () => client.get('/auth/check');

export const logout = () => client.get('/auth/logout');
