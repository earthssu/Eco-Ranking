import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PostListForm from '../../components/users/PostListForm';

const PostListContainer = () => {
  const [postList, setPostList] = useState([]);
  const user = localStorage.getItem('user');

  const fetchPostList = ({ user }) => {
    axios.get('http://localhost:8000/users/' + user + '/posts').then((res) => {
      setPostList(res.data);
    });
  };

  useEffect(() => {
    fetchPostList({ user });
  }, [user]);

  return <PostListForm posts={postList} />;
};

export default withRouter(PostListContainer);
