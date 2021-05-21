import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RankingForm from '../../components/ranking/RankingForm';
import { schoolRanking, areaRanking } from '../../modules/ranking';

const RankingContainer = () => {
  const dispatch = useDispatch();
  const { school, area, schoolError, areaError, schoolLoading, areaLoading } =
    useSelector(({ ranking, loading }) => ({
      school: ranking.school,
      area: ranking.area,
      schoolError: ranking.schoolError,
      areaError: ranking.areaError,
      schoolLoading: loading['rank/SCHOOL'],
      areaLoading: loading['rank/AREA'],
    }));

  useEffect(() => {
    dispatch(schoolRanking());
  }, [dispatch]);
  useEffect(() => {
    dispatch(areaRanking());
  }, [dispatch]);

  return (
    <RankingForm
      school={school}
      area={area}
      schoolError={schoolError}
      areaError={areaError}
      schoolLoading={schoolLoading}
      areaLoading={areaLoading}
    />
  );
};

export default withRouter(RankingContainer);
