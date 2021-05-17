import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Timeline } from 'antd';

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: space-between;
`;
const SectionBlock = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 49%;
  height: 600px;
  align-items: center;
  background: #fdffcd;
  border-radius: 1rem 1rem;
  border: 3px solid #626262;
  h1 {
    text-align: center;
    font-weight: 800;
  }
`;

const FirstSchoolBlock = styled.div`
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const SecondSchoolBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const ThirdSchoolBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const MainForm = () => {
  return (
    <>
      <ResponsiveCustom>
        <SectionBlock>
          <h1>학교 랭킹 TOP 3</h1>
          <FirstSchoolBlock>
            <div className="school-name">강서구 초등학교</div>
            <div className="score">80점</div>
          </FirstSchoolBlock>
          <SecondSchoolBlock>
            <div className="school-name">강서구 초등학교</div>
            <div className="score">80점</div>
          </SecondSchoolBlock>
          <ThirdSchoolBlock>
            <div className="school-name">강서구 초등학교</div>
            <div className="score">80점</div>
          </ThirdSchoolBlock>
        </SectionBlock>
        <SectionBlock>
          <h1>탄소 절감 방법</h1>
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default MainForm;
