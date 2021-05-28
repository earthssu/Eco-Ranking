import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Select } from 'antd';

const { Option } = Select;

const ApplyFormBlock = styled.div`
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
  margin-bottom: 1rem;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1.5rem;
`;

const ApplySchoolForm = ({ onChange, onSubmit }) => {
  return (
    <ApplyFormBlock>
      <form onSubmit={onSubmit}>
        <label for="area">지역 선택</label>
        <StyledSelect
          name="area"
          size="large"
          defaultValue="지역 선택"
          placeholder="지역 선택"
          style={{ width: 435 }}
          onChange={onChange}
        >
          <Option value="1">강남구</Option>
          <Option value="2">강동구</Option>
        </StyledSelect>
        <StyledInput
          autoComplete="school"
          name="school"
          placeholder="학교 입력"
          onChange={onChange}
        />
        <ButtonWithMarginTop fullWidth>등록하기</ButtonWithMarginTop>
      </form>
    </ApplyFormBlock>
  );
};

export default ApplySchoolForm;
