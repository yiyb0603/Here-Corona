//자영업자 장터
import React from 'react';
import { FaBars} from 'react-icons/fa';

const Market = () => {
    return(
        <>
            <div className="market-title">
                <FaBars/>
                <input type="text" className="market-input"/>
                <span>자영업자 장터</span>
            </div>

            <div className="market-Notice">
                <span>공지</span>
                <span></span>
            </div>
        </>
    )
}

export default Market;