import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { markerData } from '../../lib/data/MarkerData';
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
    });
  };

  useEffect(() => {
    fetchPollution();
  }, []);

  const mapScript = () => {
    let container = document.getElementById('pollution-map');
    let options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    markerData.forEach((el) => {
      const correctData = pollution.filter((item) => item[0] === el.sig_kor_nm);

      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      let infowindow = new kakao.maps.InfoWindow({
        content:
          '<div style="padding:5px;">' +
          correctData[0] +
          correctData[1] +
          correctData[2] +
          correctData[3] +
          correctData[4] +
          correctData[5] +
          correctData[6] +
          correctData[7] +
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
  };

  useEffect(() => {
    mapScript();
  }, []);

  return <PollutionForm />;
};

export default PollutionContainer;
