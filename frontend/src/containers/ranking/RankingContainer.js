import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RankingForm from '../../components/ranking/RankingForm';
import { schoolRanking, areaRanking } from '../../modules/ranking';

const RankingContainer = () => {
  // const dispatch = useDispatch();
  // const { school, area, schoolError, areaError, schoolLoading, areaLoading } =
  //   useSelector(({ ranking, loading }) => ({
  //     school: ranking.school,
  //     area: ranking.area,
  //     schoolError: ranking.schoolError,
  //     areaError: ranking.areaError,
  //     schoolLoading: loading['rank/SCHOOL'],
  //     areaLoading: loading['rank/AREA'],
  //   }));

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
