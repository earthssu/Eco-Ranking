import React from 'react';
import Header from '../../components/common/Header';

const HeaderContainer = ({ history }) => {
  const user = localStorage.getItem('user');

  const onLogout = () => {
    localStorage.clear();
    history.push('/login');
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
