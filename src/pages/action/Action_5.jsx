import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/scss/action/action05.scss'
import check from '../../assets/img/action/action_check.svg'

const Action_5 = () => {
    const location = useLocation();
    const { items, action1Value, action3Values, action4Values } = location.state || {
        items: [],
        action1Value: '',
        action3Values: [],
        action4Values: ''
    };
    useEffect(() => {
        console.log("Received inputValue from Action:", items, action1Value, action3Values,action4Values);
    }, [items, action1Value, action3Values,action4Values]);

    return (
        <div className="action04">
            <div className="action_back">
                <main>
                    <div className="section">Conclusion</div>
                    <div className="date">2024 . 08 . 06</div>
                    <div className="action">{action1Value}</div>
                    <p className="title">상황에서</p>
                    <div className="feeling_div">
                        {items.map((item, index) => (
                            <div className="feel" key={index}>{item.value}</div>
                        ))}
                    </div>
                    <p className="title">을/를 느꼈으며</p>

                    <div className='reason'>
                        {items.map((item,  index) => (
                            <div>
                                <div className="title_div">
                                    <div className="title_emotion_num">{index + 1}</div>
                                    <p className="title_emotion">{item.value}</p>
                                    <p className="title">의 원인은</p>
                                </div>
                                <p className="text">{action3Values[index]}</p>

                            </div>
                        ))}
                    </div>
                    <p className="title">(라)고 생각한다.</p>
                    <p className="title end">따라서</p>

                    <div className="after">{action4Values}</div>
                    <p className="title">와 같은 결론을 내린다.</p>


                    <button className='save_btn'>
                        <p>SAVE</p>
                        <img src={check} alt="" />
                    </button>

                </main>
            </div>
        </div>
    )
}

export default Action_5