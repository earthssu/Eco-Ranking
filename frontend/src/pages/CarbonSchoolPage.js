import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import CarbonSchoolContainer from '../containers/pollution/CarbonSchoolContainer';
import { Helmet } from 'react-helmet-async';

const CarbonSchoolPage = () => {
  return (
    <>
      <Helmet>
        <title>탄소 중점 학교 - Eco Ranking</title>
      </Helmet>
      <HeaderContainer />
      <CarbonSchoolContainer />
    </>
  );
};

export default CarbonSchoolPage;
