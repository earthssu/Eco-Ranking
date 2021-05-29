import React, { useState } from 'react';
import ApplySchoolForm from '../../components/auth/ApplySchoolForm';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const RegisterContainer = ({ history }) => {
  const [area, setArea] = useState('');
  const [school, setSchool] = useState('');

  const onChangeSchool = (e) => {
    console.log(e.target.value);
    setSchool(e.target.value);
  };

  const onChangeArea = (e) => {
    console.log(e);
    setArea(e);
  };

  const applySchool = ({ area, school }) => {
    axios
      .post('http://localhost:8000/schools/', {
        area,
        school,
      })
      .then((res) => {
        console.log(res.data);
        history.push('/register');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    applySchool({ area, school });
  };

  return (
    <ApplySchoolForm
      onChangeSchool={onChangeSchool}
      onChangeArea={onChangeArea}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterContainer);
