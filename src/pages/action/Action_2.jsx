import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/action/action02.scss';
import Header from '../../components/action/Header';

const Action_2 = ({ inputValue, setAction2Values, action2Values }) => {
    const maxItems = 3; // 최대 항목 개수
    const [items, setItems] = useState(action2Values.length > 0 ? action2Values : [{ id: 1, value: '' }]); // 항목 상태 관리

    const navigate = useNavigate();

    const [isShow, setIsshow] = useState(false);

    useEffect(() => {
        setItems(action2Values.length > 0 ? action2Values : [{ id: 1, value: '' }]);
        console.log("Received inputValue from Action:", inputValue);
    }, [action2Values]);

    // 항목 추가 함수
    const addItem = () => {
        if (items.length < maxItems) {
            setItems([...items, { id: items.length + 1, value: '' }]);
        }
    };

    // 항목 제거 함수
    const removeItem = () => {
        if (items.length > 1) {
            setItems(items.slice(0, -1));
        }
    };

    const onShow = () => {
        setIsshow(true);
    };

    const handleNextClick = () => {
        setAction2Values(items);
        navigate('/action3', { state: { items, action1Value: inputValue } });
    };

    return (
        <>
        <Header/>
        <div className="action02">
            <div className="action_back">
                <main>
                    <div className="date">2024 . 08 . 06</div>
                    <div className="title">나는 이 상황에서</div>

                    <div className="input-container">
                        {items.map((item, index) => (
                            <div key={index}>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="느꼈던 감정에 대해 간략하게 적어주세요."
                                    value={item.value}
                                    onChange={(e) => {
                                        const newItems = [...items];
                                        newItems[index].value = e.target.value;
                                        setItems(newItems);
                                    }}
                                    onClick={onShow}
                                />
                                {(isShow === true) && (items.length < maxItems) ? <button className='plus' onClick={addItem} disabled={items.length >= maxItems}></button>
                                    : null}
                                {(isShow === true) && (items.length > 1) ? <button className='back' onClick={removeItem} disabled={items.length <= 1}></button>
                                    : null}


                            </div>
                        ))}
                    </div>

                    <div className="title">을/를 느낀다.</div>
                    <div className='btn'>
                        <button
                            className="back-btn"
                            onClick={() => navigate(-1)}
                        >
                            BACK
                        </button>
                        <button
                            className={`next-btn ${items.some(item => item.value) ? 'active' : ''}`}
                            disabled={!items.some(item => item.value)}
                            onClick={handleNextClick}
                        >
                            NEXT
                        </button>
                    </div>

                </main>
            </div>
        </div>
        </>
    )
}

export default Action_2