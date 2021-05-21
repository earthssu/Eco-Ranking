import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { markerData } from '../../lib/data/MarkerData';

const { kakao } = window;

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
`;

const MapBlock = styled.div`
  width: 600px;
  height: 600px;
  margin-top: 2rem;
`;

const PollutionForm = () => {
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  const makeOverListener = (map, marker, infoWindow) => {
    return function () {
      infoWindow.open(map, marker);
    };
  };

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  const makeOutListener = (infoWindow) => {
    return function () {
      infoWindow.close();
    };
  };

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    markerData.forEach((el) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      const infoWindow = new kakao.maps.InfoWindow({
        map: map,
        content: el.sig_kor_nm, // 인포윈도우에 표시할 내용
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });

      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infoWindow),
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infoWindow),
      );
    });
  }, []);

  return (
    <ResponsiveCustom>
      <MapBlock id="myMap"></MapBlock>
    </ResponsiveCustom>
  );
};

export default PollutionForm;
