import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: space-between;
`;

const SectionBlock = styled.div`
  margin-top: 3.5rem;
  padding: 1rem;
  width: 50%;
  align-items: center;
  background: white;
  h1 {
    text-align: center;
    font-weight: 700;
    color: #156048;
  }
`;

const RankingBlock = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  height: 500px;
  overflow: auto;
`;

const GroupBlock = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 80px 80px;
  color: white;
  background: #48a789;

  span {
    margin-right: 1rem;
    font-weight: 800;
  }
  .name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const MainForm = () => {
  const schoolList = [
    '하양초등학교',
    '하양여자중학교',
    '서울초등학교',
    '영일초등학교',
    '영일중학교',
    '공주중학교',
    '한사유치원',
    '예술고등학교'
  ];
  let rank = 1;
  
  return (
    <>
      <ResponsiveCustom>
        <SectionBlock>
          <h1>학교별 순위</h1>
          <RankingBlock>
            {schoolList.map(school => (
              <GroupBlock>
                <span>{rank}</span>
                <div className="name">{school}</div>
                <div className="score">100</div>
              </GroupBlock>
            ))}
          </RankingBlock>
        </SectionBlock>
        <SectionBlock>
          <h1>지역별 순위</h1>
          <RankingBlock>
            <GroupBlock>
              <span>1</span>
              <div className="name">강남구</div>
              <div className="score">100점</div>
            </GroupBlock>
          </RankingBlock>
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default MainForm;
