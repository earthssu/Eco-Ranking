import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { Select, Input } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const ResponsiveCustom = styled(Responsive)`
  margin-top: 3.5rem;
  h1 {
    text-align: center;
    font-weight: 800;
  }
`;

const WriteBlock = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 50px 50px;
`;

const SelectBlock = styled.div`
  margin-bottom: 1rem;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  float: right;
`;

const WriteForm = ({
  onChangeField,
  onSubmit,
  category,
  text,
  user,
  score,
}) => {
  const onChangeCategory = (e) => {
    onChangeField({ key: 'category', value: e });
  };
  const onChangeText = (e) => {
    onChangeField({ key: 'text', value: e.target.value });
  };

  return (
    <>
      <ResponsiveCustom>
        <h1>
          {' '}
          {user}님의 환경 보호 지수 : {score}점
        </h1>
        <WriteBlock>
          <form onSubmit={onSubmit}>
            <SelectBlock>
              <Select
                name="category"
                size="large"
                defaultValue="키워드 선택"
                style={{ width: 200 }}
                onChange={onChangeCategory}
                value={category}
              >
                <Option value="transport">대중교통 이용</Option>
                <Option value="ecoProducts">친환경 제품 사용</Option>
                <Option value="wasteSorting">분리수거</Option>
                <Option value="veganism">비거니즘 실천</Option>
                <Option value="etc">기타</Option>
              </Select>
            </SelectBlock>
            <div>실천 내용을 간단히 입력해주세요</div>
            <TextArea rows={3} onChange={onChangeText} value={text} />
            <ButtonWithMarginTop>저장</ButtonWithMarginTop>
          </form>
        </WriteBlock>
      </ResponsiveCustom>
    </>
  );
};

export default WriteForm;
