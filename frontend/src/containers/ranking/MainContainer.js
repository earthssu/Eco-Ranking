import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import MainForm from '../../components/ranking/MainForm';

const MainContainer = () => {
  const [schoolRank, setSchoolRank] = useState([]);

  const fetchTopRanking = () => {
    axios.get('http://localhost:8000/rank/schools').then((res) => {
      console.log(res.data);
      setSchoolRank(res.data);
    });
  };

  useEffect(() => {
    fetchTopRanking();
  }, []);

  return <MainForm school={schoolRank} />;
};

export default withRouter(MainContainer);
