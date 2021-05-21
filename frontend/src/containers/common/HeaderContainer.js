import React from 'react';
import Header from '../../components/common/Header';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({ history }) => {
  const user = localStorage.getItem('user');

  const onLogout = () => {
    localStorage.clear();
    history.push('/login');
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);
