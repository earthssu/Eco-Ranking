import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainForm from '../../components/ranking/MainForm';
import { schoolRanking } from '../../modules/ranking';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { school, schoolError, schoolLoading } = useSelector(
    ({ ranking, loading }) => ({
      school: ranking.school,
      schoolError: ranking.schoolError,
      schoolLoading: loading['rank/SCHOOL'],
    }),
  );

  useEffect(() => {
    dispatch(schoolRanking());
  }, [dispatch]);

  return (
    <MainForm
      school={school}
      schoolError={schoolError}
      schoolLoading={schoolLoading}
    />
  );
};

export default withRouter(MainContainer);
