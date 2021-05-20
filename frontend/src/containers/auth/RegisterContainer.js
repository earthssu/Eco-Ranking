import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import RegisterForm from '../../components/auth/RegisterForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const RegisterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, userId, password, passwordConfirm, area, school } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(
      register({ username, userId, password, passwordConfirm, area, school }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return <RegisterForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(RegisterContainer);
