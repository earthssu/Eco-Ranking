import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { BulbOutlined } from '@ant-design/icons';

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
`;

const SectionBlock = styled.div`
  padding: 1rem;
  width: 50%;
  align-items: center;
  background: white;
  h1 {
    text-align: center;
    font-weight: 800;
    color: #156048;
  }
`;

const FirstSchoolBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(0, 108, 84, 0.7);
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
  background: rgba(0, 186, 145, 0.7);
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
  background: rgba(0, 186, 145, 0.4);
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

const RecommendBlock = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 75%;
  padding: 2.5rem;
  border-radius: 50px 50px;
  background: #ffffd9;
  font-size: 1.4rem;
  font-weight: 600;
`;

const CustomBulb = styled(BulbOutlined)`
  color: #ffb23c;
  margin-right: 0.5rem;
`;

const RecommendListBlock = styled.div`
  margin-bottom: 1rem;
`;
const MainForm = ({ school }) => {
  return (
    <>
      <ResponsiveCustom>
        {school && (
          <SectionBlock>
            <h1>학교 랭킹 TOP 3</h1>
            {school[0] && (
              <FirstSchoolBlock>
                <div className="school-name">{school[0]['name']}</div>
                <div className="score">{school[0]['finalScore']}점</div>
              </FirstSchoolBlock>
            )}
            {school[1] && (
              <SecondSchoolBlock>
                <div className="school-name">{school[1]['name']}</div>
                <div className="score">{school[1]['finaleScore']}점</div>
              </SecondSchoolBlock>
            )}
            {school[2] && (
              <ThirdSchoolBlock>
                <div className="school-name">{school[2]['name']}</div>
                <div className="score">{school[2]['finalScore']}점</div>
              </ThirdSchoolBlock>
            )}
          </SectionBlock>
        )}
        <SectionBlock>
          <h1>Tip! 탄소 절감하는 방법</h1>
          <RecommendBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>대중교통 이용하기</span>
            </RecommendListBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>일회용품 줄이기</span>
            </RecommendListBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>냉난방 적정 온도로 설정하기</span>
            </RecommendListBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>친환경 소재 제품 사용하기</span>
            </RecommendListBlock>
          </RecommendBlock>
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default MainForm;
