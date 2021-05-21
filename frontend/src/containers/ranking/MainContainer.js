import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import MainForm from '../../components/ranking/MainForm';

const MainContainer = () => {
  const [schoolRank, setSchoolRank] = useState([]);

  const fetchTopRanking = () => {
    axios.get('http://127.0.0.1:8000/rank/schools').then((res) => {
      setSchoolRank(res.data.slice(0, 3));
    });
  };

  useEffect(() => {
    fetchTopRanking();
  }, []);

  return <MainForm school={schoolRank} />;
};

export default withRouter(MainContainer);
