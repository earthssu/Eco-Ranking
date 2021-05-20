import React from 'react';
import Header from '../components/common/Header';
import WriteForm from '../components/users/WriteForm';
import PostListForm from '../components/users/PostListForm';

const WritePage = () => {
  return (
    <>
      <Header />
      <WriteForm />
      <PostListForm />
    </>
  );
};

export default WritePage;
