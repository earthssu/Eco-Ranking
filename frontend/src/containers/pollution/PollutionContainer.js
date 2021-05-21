import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PollutionForm from '../../components/pollution/PollutionForm';

const { kakao } = window;

const PollutionContainer = () => {
  const [pollution, setPollution] = useState([]);
  const makeOverListener = (map, marker, infoWindow) => {
    return function () {
      infoWindow.open(map, marker);
    };
  };

  const makeOutListener = (infoWindow) => {
    return function () {
      infoWindow.close();
    };
  };

  const fetchPollution = () => {
    axios.get('http://localhost:8000/pollution').then((res) => {
      setPollution(res.data);
      console.log(pollution);
    });
  };

  useEffect(() => {
    fetchPollution();
  }, []);

  let container = document.getElementById('pollution-map');
  let options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 9,
  };
  const map = new kakao.maps.Map(container, options);

  pollution.forEach((el) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(Number(el[7]), Number(el[8])),
    });
    let infowindow = new kakao.maps.InfoWindow({
      content:
        '<div style="padding:2px;"><p><b>' +
        el[0] +
        '</b></p><p>이산화질소농도: ' +
        el[1] +
        '</p><p>오존농도: ' +
        el[2] +
        '</p><p>일산화탄소농도: ' +
        el[3] +
        '</p><p>아황산가스: ' +
        el[4] +
        '</p><p>미세먼지: ' +
        el[5] +
        '</p><p>초미세먼지: ' +
        el[6] +
        '</div>',
    });

    kakao.maps.event.addListener(
      marker,
      'mouseover',
      makeOverListener(map, marker, infowindow),
    );
    kakao.maps.event.addListener(
      marker,
      'mouseout',
      makeOutListener(infowindow),
    );
  });

  return <PollutionForm />;
};

export default PollutionContainer;
