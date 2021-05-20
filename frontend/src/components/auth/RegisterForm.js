import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const RegisterFormBlock = styled.div`
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

const RegisterForm = ({ form, onChange, onSubmit }) => {
  return (
    <RegisterFormBlock>
      <h3>회원가입</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="이름"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="userId"
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={form.userId}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
        />
        <StyledInput
          autoComplete="area"
          name="area"
          placeholder="지역"
          onchange={onChange}
          value={form.area}
        />
        <StyledInput
          autoComplete="school"
          name="school"
          placeholder="학교"
          onChange={onChange}
          value={form.school}
        />
        <ButtonWithMarginTop fullWidth>회원가입</ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
