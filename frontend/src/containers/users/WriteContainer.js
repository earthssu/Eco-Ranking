import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import WriteForm from '../../components/users/WriteForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const WriteContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { category, text } = useSelector(({ write }) => ({
    category: write.category,
    text: write.text,
  }));
  const user = localStorage.getItem('user');
  const [score, setScore] = useState(0);
  const categoryKor = {
    transport: '대중교통 이용',
    ecoProducts: '친환경 제품 사용',
    wasteSorting: '분리수거',
    veganism: '비거니즘 실천',
    etc: '기타',
  };

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const writePost = ({ user, category, text }) => {
    const replaceCate = categoryKor[category];
    axios
      .post('http://localhost:8000/users/' + user + '/posting/', {
        replaceCate,
        text,
      })
      .then((res) => {
        window.location.reload();
      });
  };

  const fetchUserScore = ({ user }) => {
    axios.get('http://localhost:8000/users/' + user + '/score').then((res) => {
      setScore(res.data);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    writePost({ user, category, text });
  };

  useEffect(() => {
    fetchUserScore({ user });
  }, [user]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <WriteForm
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      category={category}
      text={text}
      user={user}
      score={score}
    />
  );
};

export default withRouter(WriteContainer);
