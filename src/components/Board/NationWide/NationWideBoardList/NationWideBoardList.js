import React from 'react';
import { Link } from "react-router-dom";
import './NationWideBoardList.scss';

// 게시판 아이템 리스트들

const NationWideBoardList = () => {
    return (
        <div>
            <Link to ="/BoardPage">아이템이 들어갈 자리</Link>
        </div>
    );
}

export default NationWideBoardList;