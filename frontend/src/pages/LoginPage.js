import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginContainer from '../containers/auth/LoginContainer';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>로그인 - Eco Ranking</title>
      </Helmet>
      <LoginContainer />
    </AuthTemplate>
  );
};

export default LoginPage;
