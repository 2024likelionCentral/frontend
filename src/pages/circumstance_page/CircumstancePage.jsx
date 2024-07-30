import React from 'react';
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

const CircumstancePage = () => {
  return (
    <>
    <Header/>
    <div className='circumstance_cognition_wrap'>
      <h1 className='main'>Circumstance Cognition</h1>
      <div className='hr'/>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        className='swiper-container'
      >
        <SwiperSlide className='swiper-slide'>
          <div className='bookshelf'>
          <div className='book-container'>
              <img src={book01} alt='book' className='book01'/>
              <div className='book-text01'>2024 . 08 . 06</div>
            </div>
            <div className='book-container'>
              <img src={book02} alt='book' className='book02'/>
              <div className='book-text'>2024 . 07 . 11</div>
            </div>
            <div className='book-container'>
              <img src={book02} alt='book' className='book02'/>
              <div className='book-text'>2024 . 07 . 05</div>
            </div>
            <div className='book-container'>
              <img src={book03} alt='book' className='book03'/>
              <div className='book-text02'>2024 . 06 . 21</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='bookshelf'>
            <div className='book-container'>
              <img src={book02} alt='book' className='book02'/>
              <div className='book-text'>2024 . 06 . 17</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h2 className='date'>2024. 08. 06</h2>
      <p className='p'>오늘의 상황은 아직 비어있어요.<br/>지금 바로 작성해 볼까요?</p>
      <button className='button'>NEW<img src={pen} className='pen'/></button>
    </div>
    </>
  );
}

export default CircumstancePage;
