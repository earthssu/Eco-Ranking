import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import LoginForm from '../../components/auth/LoginForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localstroage is not working');
      }
    }
  }, [history, user]);

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(LoginContainer);