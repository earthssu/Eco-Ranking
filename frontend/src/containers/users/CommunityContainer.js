import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CommunityForm from '../../components/users/CommunityForm';

const CommunityContainer = () => {
  const [postList, setPostList] = useState([]);

  const fetchAllPostList = () => {
    axios.get('http://localhost:8000/posts').then((res) => {
      setPostList(res.data);
    });
  };

  useEffect(() => {
    fetchAllPostList();
  }, []);

  return <CommunityForm posts={postList} />;
};

export default withRouter(CommunityContainer);
