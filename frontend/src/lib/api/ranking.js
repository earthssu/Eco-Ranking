import client from './client';

export const schoolRanking = () => {
  client.get('http://localhost:8000/rank/schools');
};

export const areaRanking = () => {
  client.get('http://localhost:8000/rank/area');
};
