import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import RankingPage from './pages/RankingPage';
import PollutionPage from './pages/PollutionPage';
import WritePage from './pages/WritePage';
import CommunityPage from './pages/CommunityPage';
import ApplySchoolPage from './pages/ApplySchoolPage';
import CarbonSchoolPage from './pages/CarbonSchoolPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Eco Ranking</title>
      </Helmet>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={RankingPage} path="/ranking" />
      <Route component={PollutionPage} path="/pollution" exact />
      <Route component={WritePage} path="/write" />
      <Route component={CommunityPage} path="/community" />
      <Route component={ApplySchoolPage} path="/apply" />
      <Route component={CarbonSchoolPage} path="/carbonschool" />
    </>
  );
}

export default App;
