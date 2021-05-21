import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import RankingContainer from '../containers/ranking/RankingContainer';
import { Helmet } from 'react-helmet-async';

const RankingPage = () => {
  return (
    <>
      <Helmet>
        <title>일간 순위 - Eco Ranking</title>
      </Helmet>
      <HeaderContainer />
      <RankingContainer />
    </>
  );
};

export default RankingPage;
