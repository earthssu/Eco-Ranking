import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const MapBlock = styled.div`
  width: 600px;
  height: 600px;
  margin-top: 2rem;
`;

const CarbonSchoolForm = () => {
  return (
    <ResponsiveCustom>
      <MapBlock id="carbon-map"></MapBlock>
    </ResponsiveCustom>
  );
};

export default CarbonSchoolForm;
