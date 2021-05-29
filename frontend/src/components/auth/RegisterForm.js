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

const RegisterForm = ({
  form,
  schools,
  onChange,
  onChangeArea,
  onChangeSchool,
  onSubmit,
}) => {
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
          name="password1"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password1}
        />
        <StyledInput
          autoComplete="new-password"
          name="password2"
          placeholder="비밀번호 확인"
          type="password"
          onChange={onChange}
          value={form.password2}
        />
        <LabelMargin for="area">지역 선택</LabelMargin>
        <StyledSelect
          name="area"
          size="large"
          defaultValue="지역 선택"
          placeholder="지역 선택"
          style={{ width: 435 }}
          onChange={onChangeArea}
          value={form.area}
        >
          <Option value="중구">중구</Option>
          <Option value="종로구">종로구</Option>
          <Option value="용산구">용산구</Option>
          <Option value="은평구">은평구</Option>
          <Option value="서대문구">서대문구</Option>
          <Option value="마포구">마포구</Option>
          <Option value="광진구">광진구</Option>
          <Option value="성동구">성동구</Option>
          <Option value="중랑구">중랑구</Option>
          <Option value="동대문구">동대문구</Option>
          <Option value="성북구">성북구</Option>
          <Option value="도봉구">도봉구</Option>
          <Option value="강북구">강북구</Option>
          <Option value="노원구">노원구</Option>
          <Option value="강서구">강서구</Option>
          <Option value="구로구">구로구</Option>
          <Option value="영등포구">영등포구</Option>
          <Option value="동작구">동작구</Option>
          <Option value="관악구">관악구</Option>
          <Option value="금천구">금천구</Option>
          <Option value="양천구">양천구</Option>
          <Option value="강남구">강남구</Option>
          <Option value="서초구">서초구</Option>
          <Option value="송파구">송파구</Option>
          <Option value="강동구">강동구</Option>
        </StyledSelect>
        <LabelMargin for="school">학교 선택</LabelMargin>
        <StyledSelect
          name="school"
          size="large"
          defaultValue="학교 선택"
          placeholder="학교 선택"
          style={{ width: 435 }}
          onChange={onChangeSchool}
          value={form.school}
        >
          {schools &&
            schools.map((item) => (
              <Option value={item.name}>{item.name}</Option>
            ))}
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
