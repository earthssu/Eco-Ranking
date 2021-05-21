import React from 'react';
import Header from '../components/common/Header';
import WriteForm from '../components/users/WriteForm';
import PostListForm from '../components/users/PostListForm';
import WriteContainer from '../containers/users/WriteContainer';

const WritePage = () => {
  return (
    <>
      <Header />
      <WriteContainer />
      <PostListForm />
    </>
  );
};

export default WritePage;
