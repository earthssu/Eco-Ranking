import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: black;
    display: flex;
    align-items: left;
    color: #237361;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #878787;
  }
  &.active {
    font-weight: 600;
    color: #2f9780;
    &:hover {
      color: #3cbea1;
    }
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            ECO RANKNG
          </Link>
          <Category to="/ranking">일간 순위</Category>
          <Category to="/pollution">지역별 오염도</Category>
          <Category to="/community">커뮤니티</Category>
          <Category to="/write">보호 기록</Category>
          {user ? (
            <div className="right">
              <UserInfo>{user}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
