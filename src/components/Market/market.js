//자영업자 장터
import React from 'react';

import MarketList from 'components/Market/MarketList/marketList';
import { FaBars} from 'react-icons/fa';
import 'components/Market/market.scss';

const Market = () => {
    return(
        <>
            <div className="market-title">
                <input type="text" className="market-input"/>
                <span className="market-titleText">자영업자 장터</span>
            </div>

            <div className="market-Notice">
                <span>공지</span>
                <span>공지사항 내용 들어가는 부분 입니다.</span>
            </div>

            <div className="market-list">
                <MarketList/>
            </div>
        </>
    )
}

export default Market;