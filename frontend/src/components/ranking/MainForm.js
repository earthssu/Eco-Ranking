import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { CheckOutlined, RightCircleOutlined } from '@ant-design/icons';

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
  margin-top: 2rem;
  width: 100%;
  height: 75%;
  padding: 2.5rem;
  border-radius: 50px 50px;
  background: #fffeec;
  font-size: 1.2rem;
  font-weight: 600;
`;

const CustomBulb = styled(CheckOutlined)`
  color: #ffb23c;
  margin-right: 0.5rem;
`;

const CutomRight = styled(RightCircleOutlined)`
  color: #156048;
  margin-right: 0.4rem;
`;

const RecommendListBlock = styled.div`
  margin-bottom: 0.7rem;
`;

const LinkBlock = styled.div`
  margin-left: 16rem;
  margin-bottom: 0.7rem;
  a:link {
    color: #2b8568;
  }
  a:visited {
    color: #6c8e83;
  }
`;

const SchoolRecommendBlock = styled.div`
  margin-top: 2rem;
  text-align: center;

  h3 {
    font-weight: 700;
    color: #2f9780;
  }
  div {
    font-size: 1rem;
    font-weight: 500;
  }
  svg {
    margin-left: 12rem;
    margin-top: 1rem;
  }
  a {
    margin-top: 1rem;
  }
  a:link {
    color: #2b8568;
  }
  a:visited {
    color: #6c8e83;
  }
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
                <div className="score">{school[1]['finalScore']}점</div>
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
          <h1>생활 속 에코 실천</h1>
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
            <LinkBlock>
              <CutomRight />
              <a href="https://ecomileage.seoul.go.kr/home/learn/ecoLife.do?menuNo=15">
                 더 알아보기
              </a>
            </LinkBlock>
            <SchoolRecommendBlock>
              <h3>탄소 중점 학교 소개</h3>
              <div>
                탄소 중점 학교란? 초중고 학교의 탄소 중립 실현을 위해 6개 부처가
                협업해 실천 행동을 지원하는 제도
              </div>
              <CutomRight />
              <Link to="/carbonschool">탄소 중점 학교 보기</Link>
            </SchoolRecommendBlock>
          </RecommendBlock>
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default MainForm;
