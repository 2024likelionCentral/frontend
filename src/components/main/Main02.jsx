import React, { useEffect, useState }  from 'react'
import Togle01 from '../../assets/img/main/1.svg'
import Togle02 from '../../assets/img/main/2.svg'
import pen from '../../assets/img/main/new.svg'
import line from '../../assets/img/main/line.svg'
import detail from '../../assets/img/main/more.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Main02 = () => {
    

    const navigate = useNavigate();

    const [userProfile, setProfile] = useState({
        id: '',
        username: '',
        motto: '',
      });

      useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const accessToken = localStorage.getItem('accessToken');
    
            const profileResponse = await axios.get('http://15.165.73.36:1234/user-profile', {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            });
    
            const userProfile = profileResponse.data;
    
            setProfile({
              id: userProfile.id,
              username: userProfile.username,
              motto: userProfile.motto,
            });
          } catch (error) {
            setError(error.message);
            console.error('Error fetching user profile:', error);
          }
        };
    
        fetchUserProfile();
      }, []);

    const circumstanceButtonClick = () => {
        navigate('/circumstancePage');
    }

    const goalButtonClick = () => {
        navigate('/goalMain');
    }

      const newGoalButtonClick = () => {
        navigate('/goal01');
    }

    const newCircumstancegoalButtonClick = () => {
        navigate('/action1');
      }
    

  return (
    <div className='main02_wrap'>
        <div className='welcome'>
            <p className='p'>Welcome To Metalog</p>
            <div className='underline01'/>
            <p className='p'>{userProfile.username} Dashboard</p>
            <div className='underline02'/>
        </div>

        <div className='container01'>
            <div className='proprity'>
                <h3 className='text'>PRIORITY GOAL</h3>
                <div className='goal'>
                    <p className='date_left'>2024 . 07 . 31</p>
                    <p className='date'>|</p>
                    <p className='goal_right'>프로젝트 개발 완료하기</p>
                </div>
                <div className='togle'>
                    <div className='content01'>
                        <img src={Togle01} className='icon'/>
                        <p className='detail'>디자인 피드백하기</p>
                    </div>
                    <div className='content02'>
                        <img src={Togle02} className='icon'/>
                        <p className='detail'> 프론트엔드와 소통 후 연결하기</p>
                    </div>
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
  )
}

export default Main02