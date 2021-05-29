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

const ApplySchoolForm = ({ onChangeArea, onChangeSchool, onSubmit }) => {
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
          onChange={onChangeArea}
        >
          <Option value="1">중구</Option>
          <Option value="2">종로구</Option>
          <Option value="3">용산구</Option>
          <Option value="4">은평구</Option>
          <Option value="5">서대문구</Option>
          <Option value="6">마포구</Option>
          <Option value="7">광진구</Option>
          <Option value="8">성동구</Option>
          <Option value="9">중랑구</Option>
          <Option value="10">동대문구</Option>
          <Option value="11">성북구</Option>
          <Option value="12">도봉구</Option>
          <Option value="13">강북구</Option>
          <Option value="14">노원구</Option>
          <Option value="15">강서구</Option>
          <Option value="16">구로구</Option>
          <Option value="17">영등포구</Option>
          <Option value="18">동작구</Option>
          <Option value="19">관악구</Option>
          <Option value="20">금천구</Option>
          <Option value="21">양천구</Option>
          <Option value="22">강남구</Option>
          <Option value="23">서초구</Option>
          <Option value="24">송파구</Option>
          <Option value="25">강동구</Option>
        </StyledSelect>
        <StyledInput
          autoComplete="school"
          name="school"
          placeholder="학교 입력"
          onChange={onChangeSchool}
        />
        <ButtonWithMarginTop fullWidth>등록하기</ButtonWithMarginTop>
      </form>
    </ApplyFormBlock>
  );
};

export default ApplySchoolForm;
