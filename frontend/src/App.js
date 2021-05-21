import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import RankingPage from './pages/RankingPage';
import PollutionPage from './pages/PollutionPage';
import AreaPollutionPage from './pages/AreaPollutionPage';
import WritePage from './pages/WritePage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={RankingPage} path="/ranking" />
      <Route component={PollutionPage} path="/pollution" exact />
      <Route component={AreaPollutionPage} path="/pollution/:area" />
      <Route component={WritePage} path="/write" />
      <Route component={CommunityPage} path="/community" />
    </>
  );
}

export default App;