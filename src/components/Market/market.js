//자영업자 장터
import React from 'react';

import MarketList from 'components/Market/MarketList/marketList';
import { FaBars} from 'react-icons/fa';
import 'components/Market/market.scss';

const Market = () => {
    return(
        <>
            <div className="market-title">
                <span className="market-titleText">자영업자 장터</span>
            </div>

            <div className="market-Notice">
                <span className="market-Notice-text">공지</span>
                <span className="market-Notice-content">가게 홍보 문의는 email@email.com 으로 부탁드립니다.</span>
            </div>

            <div className="market-list">
                <MarketList/>
                <MarketList/>
            </div>
        </>
    )
}

export default Market;