import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import LoginForm from '../../components/auth/LoginForm';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const authLogin = ({ username, password }) => {
    axios
      .post('http://localhost:8000/auth/login/', { username, password })
      .then((res) => {
        console.log(res.data);
        const token = res.data.key;
        const user = res.data.username;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    authLogin({ username, password });
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(LoginContainer);
