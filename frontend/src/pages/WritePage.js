import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/users/PostListContainer';
import WriteContainer from '../containers/users/WriteContainer';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <WriteContainer />
      <PostListContainer />
    </>
  );
};

export default WritePage;
