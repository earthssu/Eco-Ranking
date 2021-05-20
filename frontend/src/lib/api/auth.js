import client from './client';

export const login = ({ userId, password }) => {
  client.post('http://localhost:8000/auth/login', { userId, password });
};

export const register = ({ username, userId, password, area, school }) => {
  client.post('http://localhost:8000/auth/register', {
    username,
    userId,
    password,
    area,
    school,
  });
};

export const check = () => client.get('/auth/check');

export const logout = () => client.get('/auth/logout');
