import React, { useEffect } from 'react';
import CarbonSchoolForm from '../../components/pollution/CarbonSchoolForm';
import carbonSchool from '../../lib/data/CarbonSchool.json';

const { kakao } = window;

const CarbonSchoolContainer = () => {
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }
  useEffect(() => {
    let mapContainer = document.getElementById('carbon-map');
    let mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 9, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const imageSrc =
      'data:image/svg+xml;base64,PHN2ZyBpZD0iZmxhdCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNy4zNDUgMGEzLjEgMy4xIDAgMCAwIC0zLjEgMy4xdjEyNC45aDYuMnYtMTI0LjlhMy4xIDMuMSAwIDAgMCAtMy4xLTMuMXoiIGZpbGw9IiNkYmUyZWIiLz48cGF0aCBkPSJtNTguOTk0IDExLjh2NTIuMDU5YTQuNjU5IDQuNjU5IDAgMCAwIC0yLjEzNCAzLjc2NiA0LjQzNiA0LjQzNiAwIDAgMCAxLjQ1NiAzLjIwNmMuMjA4LjIuNjc4LjYxOC42NzguNjE4IDE4LjI1MyAxMy4xMjMgMzYuNTA3LTEzLjEyNCA1NC43NiAwdi01OS42NDljLTE4LjI1NC0xMy4xMjUtMzYuNTA3IDEzLjEyMS01NC43NiAweiIgZmlsbD0iI2UyNTA2MSIvPjxwYXRoIGQ9Im03NS4yIDY4LjFjLTE4LjI1LTEzLjEyNS0zNi41IDEzLjEyMi01NC43NTcgMHYtNTkuNjUzYzE4LjI1NyAxMy4xMjQgMzYuNTA3LTEzLjEyMyA1NC43NTcgMHoiIGZpbGw9IiNlZjUzNjEiLz48L3N2Zz4='; // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(46, 46); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    carbonSchool.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
        image: markerImage,
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
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
  }, []);

  return <CarbonSchoolForm />;
};

export default CarbonSchoolContainer;
