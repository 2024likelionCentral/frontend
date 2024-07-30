import React from 'react'
import { useState } from 'react';
import '../../assets/scss/action/action06.scss'
import check from '../../assets/img/action/action_check.svg'

const Action_6 = () => {
    const [inputValue, setInputValue] = useState('');
    const maxLength = 300;

    const handleInputChange = (event) => {
        if (event.target.value.length <= maxLength) {
            setInputValue(event.target.value);
        }
    };

    return (
        <div className="action04">
            <div className="action_back">
                <main>
                    <div className="section">Conclusion</div>
                    <div className="date">2024 . 08 . 06</div>
                    <div className="action">완전 킹왕짱 멍청이가 된 것</div>
                    <p className="title">상황에서</p>
                    <div className="feeling_div">
                        <div className="feel">긴장감</div>
                        <div className="feel">긴장감</div>
                        <div className="feel">긴장감</div>
                    </div>
                    <p className="title">을/를 느꼈으며</p>
                    <div className='reason'>
                        <div className="title_div">
                            <div className="title_emotion_num">1</div>
                            <p className="title_emotion">긴장감</p>
                            <p className="title">의 원인은</p>
                        </div>
                        <p className="text">해커톤, 발표, 시험 등 중요한 상황에서 발생하는 긴장감입니다. 성공 여부가 큰 영향을 미치기 때문에 발생합니다. 자신의 능력에 대한 확신이 부족할 때 긴장감이 발생합니다. 준비가 충분하지 않거나 이전 경험에서 실패한 적이 있을 때 더욱 그렇습니다.자신이나 타인이 높은 기대를 가지고 있을 때 긴장감이 증가합니다. 특히, 실패할 경우 실망을 줄까 봐 걱정하는 경우가 많습니다. 피로, 수면 부족, 영양 불균형 등 건강 상태가 좋지 않을 때 긴장감이 쉽게 발생합니다. 건강이 좋지 않으면 스트레스에 더 취약해집니다.</p>

                    </div>
                    <p className="title">(라)고 생각한다.</p>
                    <p className="title end">따라서</p>
                    <div className="after">중요한 상황을 대비하여 충분한 준비를 한다. 예를 들어, 해커톤을 준비할 때는 사전 연습, 자료 정리, 팀원과의 협업 연습을 충분히 한다. 자신감을 키우고 긍정적인 생각을 유지힌다. 실패를 두려워하지 말고, 도전하는 과정 자체를 즐기려는 마음가짐을 가진다. 긴장이 될 때는 깊고 천천히 호흡하는 연습을 한다. 명상이나 요가 같은 이완 기법을 통해 마음을 안정시키는 것도 좋고 일을 미리 계획하고 시간 관리를 철저히 한다. 마감 시간이 다가와도 여유를 가질 수 있도록 일정을 세우고 지킨다.</div>
                    <p className="title">와 같은 결론을 내린다.</p>


                    <div className='btn_div'>
                        <button
                            className="btn"
                        >
                            수정하기
                        </button>
                        <button
                            className="btn"
                        >
                            삭제하기
                        </button>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Action_6