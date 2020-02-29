import React from 'react';
import './BusanBoardList.scss';
import { Link } from 'react-router-dom';

const BusanBoardList = () => {
    return (
        <div className ="BusanBoardList">
            <Link to ="/BoardPage">아이템이 들어갈 자리</Link>
        </div>
    );
}

export default BusanBoardList;