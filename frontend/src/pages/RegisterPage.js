import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterContainer from '../containers/auth/RegisterContainer';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>회원가입 - Eco Ranking</title>
      </Helmet>
      <RegisterContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
