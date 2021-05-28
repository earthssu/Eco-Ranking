import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Select } from 'antd';

const { Option } = Select;

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

const StyledSelect = styled(Select)`
  margin-bottom: 0.5rem;
`;

const LabelMargin = styled.label`
  margin-top: 0.5rem;
`;

const ApplyLink = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  a {
    color: #868e96;
    text-decoration: underline;
    &:hover {
      color: #212529;
    }
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
          placeholder="이름 (영문 기재)"
          onChange={onChange}
          value={form.username}
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
        <LabelMargin for="area">지역 선택</LabelMargin>
        <StyledSelect
          name="area"
          size="large"
          defaultValue="지역 선택"
          placeholder="지역 선택"
          style={{ width: 435 }}
          onChange={onChange}
          value={form.area}
        >
          <Option value="1">강남구</Option>
          <Option value="2">강동구</Option>
        </StyledSelect>
        <LabelMargin for="school">학교 선택</LabelMargin>
        <StyledSelect
          name="school"
          size="large"
          defaultValue="학교 선택"
          placeholder="학교 선택"
          style={{ width: 435 }}
          onChange={onChange}
          value={form.school}
        >
          <Option value="1">휘문고등학교</Option>
          <Option value="2">샛별고등학교</Option>
        </StyledSelect>
        <ApplyLink>
          <Link to="/apply">재학 중인 학교가 없으신가요? 학교 등록하기</Link>
        </ApplyLink>
        <ButtonWithMarginTop fullWidth>회원가입</ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
