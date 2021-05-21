import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const ResponsiveCustom = styled(Responsive)`
  h1 {
    text-align: center;
    font-weight: 800;
  }
`;

const PostsBlock = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  height: 300px;
  overflow: auto;
  background: #e8f8f5;
`;

const PostBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  span {
    display: inline-block;
    width: 200px;
  }
  .date {
    width: 100px;
  }
  .keyword {
    width: 100px;
    font-weight: 700;
  }
  .comment {
    color: #676767;
  }
`;

const ButtonCustom = styled(Button)`
  font-size: 0.7rem;
`;

const PostListForm = () => {
  return (
    <>
      <ResponsiveCustom>
        <PostsBlock>
          <PostBlock>
            <span className="date">2020.05.18</span>
            <span className="keyword">대중교통 이용</span>
            <span className="comment">버스를 타고 등교함</span>
            <ButtonCustom red>삭제</ButtonCustom>
          </PostBlock>
          <PostBlock>
            <span className="date">2020.05.18</span>
            <span className="keyword">분리수거</span>
            <span className="comment">아파트 분리수거장에서 분리수거함</span>
            <ButtonCustom red>삭제</ButtonCustom>
          </PostBlock>
        </PostsBlock>
      </ResponsiveCustom>
    </>
  );
};

export default PostListForm;
