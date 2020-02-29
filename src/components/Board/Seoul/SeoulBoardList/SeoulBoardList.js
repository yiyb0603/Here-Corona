import React from 'react';
import './SeoulBoardList.scss';
import { Link } from 'react-router-dom';

const SeoulBoardList = () => {
    return (
        <div className ="SeoulBoardList">
            <Link to ="/BoardPage">아이템이 들어갈 자리</Link>
        </div>
    );
}

export default SeoulBoardList;