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
  height: 85%;
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
  float: right;
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
  a {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const MainForm = ({ school }) => {
  return (
    <>
      <ResponsiveCustom>
        {school && (
          <SectionBlock>
            <h1>?????? ?????? TOP 3</h1>
            {school[0] && (
              <FirstSchoolBlock>
                <div className="school-name">{school[0]['name']}</div>
                <div className="score">{school[0]['finalScore']}???</div>
              </FirstSchoolBlock>
            )}
            {school[1] && (
              <SecondSchoolBlock>
                <div className="school-name">{school[1]['name']}</div>
                <div className="score">{school[1]['finalScore']}???</div>
              </SecondSchoolBlock>
            )}
            {school[2] && (
              <ThirdSchoolBlock>
                <div className="school-name">{school[2]['name']}</div>
                <div className="score">{school[2]['finalScore']}???</div>
              </ThirdSchoolBlock>
            )}
          </SectionBlock>
        )}
        <SectionBlock>
          <h1>?????? ??? ?????? ??????</h1>
          <RecommendBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>???????????? ????????????</span>
            </RecommendListBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>???????????? ?????????</span>
            </RecommendListBlock>
            <RecommendListBlock>
              <CustomBulb />
              <span>????????? ?????? ????????? ????????????</span>
            </RecommendListBlock>
            <LinkBlock>
              <CutomRight />
              <a href="https://ecomileage.seoul.go.kr/home/learn/ecoLife.do?menuNo=15">
                ????? ????????????
              </a>
            </LinkBlock>
            <br />
            <SchoolRecommendBlock>
              <h3>?????? ?????? ?????? ??????</h3>
              <div>
                ?????? ?????? ?????????? ????????? ????????? ?????? ?????? ????????? ?????? 6??? ?????????
                ????????? ?????? ????????? ???????????? ??????
              </div>
              <br />
              <LinkBlock>
                <CutomRight />
                <Link to="/carbonschool">?????? ?????? ?????? ??????</Link>
              </LinkBlock>
            </SchoolRecommendBlock>
          </RecommendBlock>
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default MainForm;
