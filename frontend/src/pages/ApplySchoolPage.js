import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ApplySchoolForm from '../components/auth/ApplySchoolForm';
import { Helmet } from 'react-helmet-async';

const ApplySchoolPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>학교 등록하기 - Eco Ranking</title>
      </Helmet>
      <ApplySchoolForm />
    </AuthTemplate>
  );
};

export default ApplySchoolPage;
