import React from 'react';
import './DaeguBoard.scss';
import DaeguBoardList from '../DaeguBoardList';
import { FaBars, FaPen } from 'react-icons/fa';

const DaeguBoard = () => {
    return (
        <div className ="DaeguBoard">
            <div className="DaeguBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </div>

            <div className="DaeguBoard-TitleZone">
                <span className="DaeguBoard-Title">대구 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="DaeguBoard-NoticeZone">
                <span className="DaeguBoard-Notice">공지</span>
                <span className="DaeguBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="DaeguBoard-List">
                <DaeguBoardList />
            </div>
            <button className ="writeBoard">
                <FaPen />
            </button>
        </div>
    );
}

export default DaeguBoard;