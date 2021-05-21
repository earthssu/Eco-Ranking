import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const { kakao } = window;

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
`;

const MapBlock = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const PollutionForm = () => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <ResponsiveCustom>
      <MapBlock id="myMap"></MapBlock>
    </ResponsiveCustom>
  );
};

export default PollutionForm;
