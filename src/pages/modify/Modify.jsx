import React, { useRef, useState } from 'react';
import Header from '../../components/main/Header';
import gradiant from '../../assets/img/mypage/gradiant.svg';
import profile from '../../assets/img/mypage/profile.svg';
import add from '../../assets/img/modify/add.svg';
import remove from '../../assets/img/modify/remove.svg';

const Mypage = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(profile);

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveClick = () => {
    fileInputRef.current.value = '';
    setProfileImage(profile); // 기본 프로필 이미지로 되돌림
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <div className='modify_wrap'>
        <div className='profile_box'>
          <h1 className='h1'>개인정보 수정하기</h1>
          <h3 className='h3'>프로필 사진과 아이디를 수정할 수 있어요.</h3>
          <hr className='hr' />
          <p className='p'>프로필 사진</p>

          <div className='profile_img'>
            {/* 프로필 사진 */}
            <div id="myPhoto">
              <img src={profileImage} alt="Profile" className="Profile"/>
            </div>
            <form method="get" action="#">
              {/* 프로필 사진 선택 버튼 */}
              <input
                type="file"
                name="mypage_image"
                id="mypage_image"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <img
                id="add"
                src={add}
                alt="Add Profile"
                onClick={handleAddClick}
                style={{ cursor: 'pointer' }} // 마우스를 올렸을 때 클릭 가능한 것처럼 보이게 함
              />
              {/* 프로필 사진 삭제 버튼 */}
              <img
                id="remove"
                src={remove}
                alt="Remove Profile"
                onClick={handleRemoveClick}
                style={{ cursor: 'pointer', marginLeft: '10px' }} // 버튼 간격 조절
              />
            </form>
          </div>
          <hr className='hr' />
          <div className='id_field'>
            <p className='p'>아이디</p>
            <input type='text' placeholder='soobini1121' className='inputbox' />
          </div>
          <hr className='hr'/>
          <div className='say_field'>
            <p className='p'>좌우명</p>
            <input type='text' placeholder='메타인지를 제대로 하자!' className='inputbox' />
          </div>
          <hr className='hr' />
          <div className='done'>
            <button className='apply'>적용하기</button>
            <button className='cancel'>취소하기</button>
          </div>
        </div>
        <img src={gradiant} className='gradiant' alt="Gradiant"/>
      </div>
    </>
  );
};

export default Mypage;
