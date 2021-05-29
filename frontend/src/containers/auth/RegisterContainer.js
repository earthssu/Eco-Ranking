import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import RegisterForm from '../../components/auth/RegisterForm';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const RegisterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const [schools, setSchools] = useState([]);

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

  const onChangeArea = (e) => {
    console.log(e);
    dispatch(
      changeField({
        form: 'register',
        key: 'area',
        value: e,
      }),
    );
  };

  const onChangeSchool = (e) => {
    dispatch(
      changeField({
        form: 'register',
        key: 'school',
        value: e,
      }),
    );
  };

  const getSchools = () => {
    axios.get('http://localhost:8000/auth/schools').then((res) => {
      setSchools(res.data);
    });
  };

  const authRegister = ({
    username,
    password,
    passwordConfirm,
    area,
    school,
  }) => {
    axios
      .post('http://localhost:8000/auth/register/', {
        username,
        password,
        passwordConfirm,
        area,
        school,
      })
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm, area, school } = form;
    if (password !== passwordConfirm) {
      return;
    }
    authRegister({ username, password, passwordConfirm, area, school });
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <RegisterForm
      form={form}
      schools={schools}
      onChange={onChange}
      onChangeArea={onChangeArea}
      onChangeSchool={onChangeSchool}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterContainer);
