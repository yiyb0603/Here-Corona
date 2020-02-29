import React from 'react';
import './DaeguBoardList.scss';
import { Link } from 'react-router-dom';

const DaeguBoardList = () => {
    return (
        <div className ="DaeguBoardList">
            <Link to ="/BoardPage">아이템이 들어갈 자리</Link>
        </div>
    );
}

export default DaeguBoardList;