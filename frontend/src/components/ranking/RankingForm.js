import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

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

const RankItem = ({ rank, item }) => {
  const name = item[0];
  const score = item[1];
  return (
    <GroupBlock>
      <span>{rank}</span>
      <div className="name">{name}</div>
      <div className="score">{score}</div>
    </GroupBlock>
  );
};

const RankingForm = ({
  school,
  area,
  schoolError,
  areaError,
  schoolLoading,
  areaLoading,
}) => {
  if (schoolError) {
    return <div>학교 순위에서 에러가 발생했습니다!</div>;
  }
  if (areaError) {
    return <div>지역 순위에서 에러가 발생했습니다!</div>;
  }

  return (
    <>
      <ResponsiveCustom>
        <SectionBlock>
          <h1>학교별 순위</h1>
          {!schoolLoading && school && (
            <RankingBlock>
              {school.map((item, rank) => (
                <RankItem rank={rank + 1} item={item} />
              ))}
            </RankingBlock>
          )}
        </SectionBlock>
        <SectionBlock>
          <h1>지역별 순위</h1>
          {!areaLoading && area && (
            <RankingBlock>
              {area.map((item, rank) => (
                <RankItem rank={rank + 1} item={item} />
              ))}
            </RankingBlock>
          )}
        </SectionBlock>
      </ResponsiveCustom>
    </>
  );
};

export default RankingForm;
