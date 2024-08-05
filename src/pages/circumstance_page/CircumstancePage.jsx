import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import 추가
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import book01 from '../../assets/img/circumstance_page/book01.svg';
import book02 from '../../assets/img/circumstance_page/book02.svg';
import book03 from '../../assets/img/circumstance_page/book03.svg';
import pen from '../../assets/img/circumstance_page/pen.svg';
import Header from '../../components/main/Header';
import axios from 'axios';

// axios 인스턴스 설정
const apiClient = axios.create({
  baseURL: 'http://15.165.73.36:1234',
  headers: {
    'Content-Type': 'application/json',
  },
});

const CircumstancePage = () => {
  const [data, setData] = useState([]);
  const [swiperSlides, setSwiperSlides] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 데이터 요청
    apiClient.get('/circumstance')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  useEffect(() => {
    // SwiperSlide 생성
    if (data.length > 4) {
      const chunks = [];
      for (let i = 0; i < data.length; i += 4) {
        chunks.push(data.slice(i, i + 4));
      }
      setSwiperSlides(chunks);
    } else {
      setSwiperSlides([data]);
    }
  }, [data]);

  // 오늘 날짜 가져오기
  const today = new Date();
  const formattedToday = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;

  const handleNewButtonClick = () => {
    navigate('/action1'); // NEW 버튼 클릭 시 /action 경로로 이동
  };

  return (
    <>
      <Header />
      <div className='circumstance_cognition_wrap'>
        <h1 className='main'>Circumstance Cognition</h1>
        <div className='hr' />
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          className='swiper-container'
        >
          {swiperSlides.map((slideData, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <div className='bookshelf'>
                {slideData.map((item, i) => (
                  <div key={i} className='book-container'>
                    <img src={book02} alt='book' className='book02' />
                    <div className='book-text'>{item.date}</div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className='date'>{formattedToday}</h2>
        <p className='p'>오늘의 상황은 아직 비어있어요.<br />지금 바로 작성해 볼까요?</p>
        <button className='button' onClick={handleNewButtonClick}>NEW<img src={pen} className='pen' /></button>
      </div>
    </>
  );
}

export default CircumstancePage;