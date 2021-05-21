import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/users/PostListContainer';
import WriteContainer from '../containers/users/WriteContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>보호 기록 - Eco Ranking</title>
      </Helmet>
      <HeaderContainer />
      <WriteContainer />
      <PostListContainer />
    </>
  );
};

export default WritePage;
