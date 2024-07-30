import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../assets/scss/mypage/Calendar.css';
import arrow from '../../assets/img/mypage/arrow.svg';

const Mypage02 = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const [hasEntries, setHasEntries] = useState(null);
    
    useEffect(() => {
        // 서버에서 데이터를 가져오는 부분을 구현하세요
        // 예를 들어, fetch API를 사용할 수 있습니다.
        // fetch('/api/entries')
        //   .then(response => response.json())
        //   .then(data => setHasEntries(data.hasEntries))
        //   .catch(error => console.error('Error fetching data:', error));

        // 테스트용으로 하드코딩된 값
        setTimeout(() => {
            // 7월 12일을 선택했을 때 작성 내역이 없는 것으로 설정
            if (date.getMonth() === 6 && date.getDate() === 12) {
                setHasEntries(false);
            } else {
                setHasEntries(true); // 기본적으로 작성 내역이 있는 경우로 설정
            }
        }, 1000); // 1초 후 데이터 로드 완료를 시뮬레이션
    }, [date]); // `date` 상태가 변경될 때마다 `useEffect`가 실행되도록 설정

    const formatDate = (date) => {
        return `${date.getFullYear()}.${('0' + (date.getMonth() + 1)).slice(-2)}.${('0' + date.getDate()).slice(-2)}`;
    };

    const tileContent = ({ date, view }) => { // 날짜를 새로 만듦 
        if (view === 'month') {
            return (
                <div className="custom-tile">
                    {date.getDate()}
                </div>
            );
        }
        return null;
    };

    return (
        <div className='mypage02_wrap'>
            <div className='calendar'>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    tileContent={tileContent}
                />

                {/* 날짜 선택 표시 제거 */}
                {/* <p>Selected date: {date.toDateString()}</p> */}
            </div>

            <div className='detail'>
                <h3 className='h3'>날짜별 작성 내역</h3>

                {hasEntries === null ? (
                    <p className='p'>Loading...</p> // 데이터 로딩 중일 때 표시할 내용
                ) : !hasEntries ? (
                    <div className='content01'>
                        <p className='p'>{formatDate(date)}</p>
                        <h4 className='h4'>작성하신 내역이 없습니다.</h4>
                    </div>

                ) : (
                    <div className='content01'>
                        <p className='p'>{formatDate(date)}</p>

                        <div className='set'>
                            <div className='content02'>
                                <h4 className='h4'>목표 설정</h4>
                                <h4 className='h4'>|</h4>
                                <h4 className='h4'>1개</h4>
                                <a href='#' className='a'>보러가기 <img src={arrow} className='arrow' alt='화살표'/></a>
                            </div>
                            
                            <div className='content02'>
                                <h4 className='h4'>상황 인지</h4>
                                <h4 className='h4'>|</h4>
                                <h4 className='h4'>1개</h4>
                                <a href='#' className='a'>보러가기 <img src={arrow} className='arrow' alt='화살표'/></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mypage02;