import React, { useCallback, useEffect } from 'react';
import WriteForm from '../../components/users/WriteForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, writePost } from '../../modules/write';

const WriteContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { category, text, post, postError } = useSelector(({ write }) => ({
    category: write.category,
    text: write.text,
    post: write.post,
    postError: write.postError,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(writePost({ category, text }));
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (postError) {
      console.log(postError);
    }
  }, [postError]);
  return (
    <WriteForm
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      category={category}
      text={text}
    />
  );
};

export default WriteContainer;
