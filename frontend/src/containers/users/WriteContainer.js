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

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const writePost = ({ user, category, text }) => {
    axios
      .post('http://localhost:8000/users/' + user + '/posting/', {
        user,
        category,
        text,
      })
      .then((res) => {
        console.log(res.data);
        history.push('/write');
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
