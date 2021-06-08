# Eco-Ranking

> 제 5회 끝장 개발대회 <br>
> 학교별 환경 보호 랭킹 선정을 통한 환경 운동 도모 프로젝트

# Collaborator

| name   | github                                     |
| ------ | ------------------------------------------ |
| 김지수 | [@earthssu](https://github.com/earthssu)   |
| 최예원 | [@julia-ing](https://github.com/julia-ing) |

## 주요 기능

학생들의 환경 보호 실천의 점수화를 통해 학교별, 지역별 순위를 매기고 이를 시각화합니다.

### 순위 확인

학생들의 실천 점수와 오염도 수치를 계산한 일별 순위를 확인할 수 있습니다.
![이미지 2021  5  22  오전 4 00](https://user-images.githubusercontent.com/39795055/121210448-a737ff00-c8b6-11eb-9994-16b500fc6c2e.jpg)

### 오염도 확인

서울시 일별 평균 대기 오염도를 계산해 수치에 따라 지도에 색으로 나타나도록 했습니다. <br>
마우스를 올리면 해당 지역의 오염도를 확인할 수 있습니다.
![IMG_6936](https://user-images.githubusercontent.com/39795055/121209922-37297900-c8b6-11eb-8cee-3f1be597a4ef.jpg)

### 보호 기록

학생이 실천한 환경 보호 사례를 기록할 수 있습니다. <br>
이 게시물은 점수에 반영됩니다.
![이미지 2021  5  22  오전 4 00](https://user-images.githubusercontent.com/39795055/121210448-a737ff00-c8b6-11eb-9994-16b500fc6c2e.jpg)

### 시뮬레이션

[시뮬레이션 영상 보러 가기](https://youtube.com/video/xdKPOH0-GTw/edit)

## 개발 구현

### 기술 스택

```
front   : React + axios
back    : Django
DB      : sqlite3
Map API : KakaoMap API
```

### ERD

![eco-ranking_erd](https://user-images.githubusercontent.com/39795055/121213528-43fb9c00-c8b9-11eb-9496-aa59ad4c8283.png)

### API

[REST API 보러 가기](https://www.notion.so/edd2a76797d0414d92e392aa62e5c9a8?v=d6b45f349db045cab3876ac9b9cbc06d)
