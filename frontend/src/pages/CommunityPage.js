import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import CommunityContainer from '../containers/users/CommunityContainer';
import { Helmet } from 'react-helmet-async';

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>커뮤니티 - Eco Ranking</title>
      </Helmet>
      <HeaderContainer />
      <CommunityContainer />
    </>
  );
};

export default CommunityPage;
