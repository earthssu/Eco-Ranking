import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ApplySchoolContainer from '../containers/auth/ApplySchoolContainer';
import { Helmet } from 'react-helmet-async';

const ApplySchoolPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>학교 등록하기 - Eco Ranking</title>
      </Helmet>
      <ApplySchoolContainer />
    </AuthTemplate>
  );
};

export default ApplySchoolPage;
