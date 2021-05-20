import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const LoginFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #525252;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #868e96;
    text-decoration: underline;
    &:hover {
      color: #212529;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1.5rem;
`;

const LoginForm = ({ form, onChange, onSubmit }) => {
  return (
    <LoginFormBlock>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="userId"
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={form.userId}
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <ButtonWithMarginTop fullWidth>로그인</ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </LoginFormBlock>
  );
};

export default LoginForm;
