import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import RankingForm from '../../components/ranking/RankingForm';

const RankingContainer = () => {
  const [schoolRank, setSchoolRank] = useState([]);
  const [areaRank, setAreaRank] = useState([]);

  const fetchSchoolRanking = () => {
    axios.get('http://127.0.0.1:8000/rank/schools').then((res) => {
      console.log(res.data);
      setSchoolRank(res.data);
    });
  };

  const fetchAreaRanking = () => {
    axios.get('http://127.0.0.1:8000/rank/area').then((res) => {
      console.log(res.data);
      setAreaRank(res.data);
    });
  };

  useEffect(() => {
    fetchSchoolRanking();
  }, []);
  useEffect(() => {
    fetchAreaRanking();
  }, []);

  return <RankingForm school={schoolRank} area={areaRank} />;
};

export default withRouter(RankingContainer);
