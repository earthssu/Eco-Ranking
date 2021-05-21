import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListForm from '../components/users/PostListForm';
import WriteContainer from '../containers/users/WriteContainer';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <WriteContainer />
      <PostListForm />
    </>
  );
};

export default WritePage;
