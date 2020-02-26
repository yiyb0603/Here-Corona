//의심 증상
import React from 'react';
import './symptom.scss';

const Symptom =()=> {
    return(
        <>
        <div className="symptom-title">신종 코로나 바이러스 의심 증상</div>
        <div className="symptom-MainImage">image</div>
        <div className="symptom-list">
            <li className="symptom-item">숨 쉬는게 힘들 정도의 마른 기침</li>
            <li className="symptom-item">37.5도 이상의 발열</li>
            <li className="symptom-item">음식 섭취 시 아픈 목</li>
            <li className="symptom-item">구토와 설사, 복통</li>
            <li className="symptom-item">온몸이 뻐근하고 아픈 근육통</li>
        </div>
        </>
    )
}

export default Symptom; 