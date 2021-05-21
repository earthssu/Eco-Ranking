import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import RankingForm from '../../components/ranking/RankingForm';

const RankingContainer = () => {
  const [schoolRank, setSchoolRank] = useState([]);
  const [areaRank, setAreaRank] = useState([]);

  const fetchSchoolRanking = () => {
    axios.get('http://localhost:8000/rank/schools').then((res) => {
      console.log(res.data);
      console.log(res.data[0]);
      setSchoolRank(res.data);
    });
  };

  const fetchAreaRanking = () => {
    axios.get('http://localhost:8000/rank/area').then((res) => {
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
