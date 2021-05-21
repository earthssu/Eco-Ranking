import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PollutionContainer from '../containers/pollution/PollutionContainer';
import { Helmet } from 'react-helmet-async';

const PollutionPage = () => {
  return (
    <>
      <Helmet>
        <titile>지역별 오염도 - Eco Ranking</titile>
      </Helmet>
      <HeaderContainer />
      <PollutionContainer />
    </>
  );
};

export default PollutionPage;
