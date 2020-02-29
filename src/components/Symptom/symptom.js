//의심 증상
import React from 'react';
import './symptom.scss';

import { FaLongArrowAltDown } from "react-icons/fa";

import symptom1 from 'asset/images/symptom1.png';
import symptom2 from 'asset/images/symptom2.png';
import symptom3 from 'asset/images/symptom3.png';
import symptomMain from 'asset/images/symptomMain.jpg';

const Symptom =()=> {
    return(
        <>
        <div className="symptom-title">신종 코로나 바이러스 의심 증상</div>
        <img src={symptomMain} className="symptom-MainImage"/>
        <div className="symptom-list">
            <li className="symptom-item">숨 쉬는게 힘들 정도의 마른 기침</li>
            <li className="symptom-item">37.5도 이상의 발열</li>
            <li className="symptom-item">음식 섭취 시 아픈 목</li>
            <li className="symptom-item">구토와 설사, 복통</li>
            <li className="symptom-item">온몸이 뻐근하고 아픈 근육통</li>
            
                <FaLongArrowAltDown className="symptom-icon"/>
        </div>

        <div className="symptom-imageZone">
            <img src={symptom1} className="symptom-image"/>
            <img src={symptom2} className="symptom-image"/>
            <img src={symptom3} className="symptom-image"/>
        </div>
        </>
    )
}

export default Symptom; 