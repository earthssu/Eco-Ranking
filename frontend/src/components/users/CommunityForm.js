import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { HeartTwoTone } from '@ant-design/icons';

const ResponsiveCustom = styled(Responsive)`
  margin-top: 3.5rem;
`;

const PostItemBlock = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid #bababa;
  }
  h2 {
    color: #5a5a5a;
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    margin-top: 1rem;
  }
  .name {
    color: #226959;
    margin-right: 0.5rem;
  }
  .sub-box {
    margin-top: 0.5rem;
  }
  .post-date {
    margin-right: 1rem;
  }
  .post-keyword {
    font-weight: 700;
  }
`;

const LikeBlock = styled.div`
  margin-left: 90%;
`;

const LikeButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.2rem 0.3rem;
  border-radius: 30px 30px;
  cursor: pointer;
  border: 1px solid #ff0087;
  background: white;
  color: #5a5a5a;
`;

const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>
        <b className="name">홍길동</b> 강서구초등학교
      </h2>
      <div className="sub-box">
        <span className="post-date">2020.05.19</span>
        <span className="post-keyword">대중교통 이용</span>
      </div>
      <p>집에서 학교까지 버스 타고 이동함.</p>
      <LikeBlock>
        <LikeButton>
          <HeartTwoTone twoToneColor="#eb2f96" />
          &nbsp; 추천
        </LikeButton>
        <span>2</span>
      </LikeBlock>
    </PostItemBlock>
  );
};
const CommunityForm = () => {
  return (
    <>
      <ResponsiveCustom>
        <PostItem />
        <PostItem />
      </ResponsiveCustom>
    </>
  );
};

export default CommunityForm;
