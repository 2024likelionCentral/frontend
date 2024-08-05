import React, { useEffect, useState } from 'react';
import Togle01 from '../../assets/img/main/1.svg';
import Togle02 from '../../assets/img/main/2.svg';
import Togle03 from '../../assets/img/main/Togle03.svg';
import pen from '../../assets/img/main/new.svg';
import line from '../../assets/img/main/line.svg';
import detail from '../../assets/img/main/more.svg';
import { useNavigate } from 'react-router-dom';

const Main02 = () => {
    const navigate = useNavigate();
    const [priorityGoal, setPriorityGoal] = useState({ date: '', goalText: '', sortedTexts: [] });

    useEffect(() => {
        const storedGoal = localStorage.getItem('priorityGoal');
        if (storedGoal) {
            setPriorityGoal(JSON.parse(storedGoal));
        }
    }, []);

    const circumstanceButtonClick = () => {
        navigate('/circumstancePage');
    };

    const goalButtonClick = () => {
        navigate('/goalMain');
    };

    const mypageButtonClick = () => {
        navigate('/mypage');
    };

    const newGoalButtonClick = () => {
        navigate('/goal01');
    };

    const newCircumstancegoalButtonClick = () => {
        navigate('/action1');
    };

    return (
        <div className='main02_wrap'>
            <div className='welcome'>
                <p className='p'>Welcome To Metalog</p>
                <div className='underline01'/>
                <p className='p'>soobini1121 Dashboard</p>
                <div className='underline02'/>
            </div>

            <div className='container01'>
                <div className='proprity'>
                    <h3 className='text'>PRIORITY GOAL</h3>
                    <div className='goal'>
                        <p className='date_left'>{priorityGoal.date}</p>
                        <p className='date'>|</p>
                        <p className='goal_right'>{priorityGoal.goalText}</p>
                    </div>
                    <div className='togle'>
                        {priorityGoal.sortedTexts && priorityGoal.sortedTexts.map((text, index) => (
                            <div className={`content0${index + 1}`} key={index}>
                                <img src={index % 3 === 0 ? Togle01 : index % 3 === 1 ? Togle02 : Togle03} className='icon' />
                                <p className='detail'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='go_to_goal'>
                    <button className='goalbtn' onClick={goalButtonClick}>목표를 위한 실천 방법 보러가기</button>
                    <div className='write' onClick={newGoalButtonClick}>
                        <img src={pen} className='pen'/>
                        <div className='new' >신규 목표 작성하기</div>
                    </div>
                </div>
            </div>

            <div className='circumstance'>
                <div className='content03'>
                    <h1 className='h1'>PREVIOUS CIRCUMSTANCE</h1>
                    <div className='content04' onClick={circumstanceButtonClick}>
                        <h3 className='more'>더보기</h3>
                        <img src={detail} className='detail'/>
                    </div>
                </div>
                
                <div className='container02'>
                    <div className='box'>
                        <h3 className='h3'>2024. 07. 11</h3>
                    </div>
                    <div className='box'>
                        <h3 className='h3'>2024. 07. 05</h3>
                    </div>
                    <div className='box'>
                        <h3 className='h3'>2024. 06. 21</h3>
                    </div>
                    <div className='box'>
                        <h3 className='h3'>2024. 06. 19</h3>
                    </div>
                </div>

                <div className='circumstance_box' onClick={newCircumstancegoalButtonClick}>
                    <div className='text'>
                        <h1 className='h1'>CIRCUMSTANCE</h1>
                        <p className='p'>상황에 대한 인지 능력을 키워보세요!</p>
                    </div>
                    <img src={line} className='line'/>
                </div>

                <div className='circumstance_box' onClick={newGoalButtonClick}>
                    <div className='text'>
                        <h1 className='h1'>GOAL</h1>
                        <p className='p'>목표를 설정하고 도달하기 위해 노력하며 메타인지를 향상시켜보세요!</p>
                    </div>
                    <img src={line} className='line'/>
                </div>
            </div>
        </div>
    );
};

export default Main02;
