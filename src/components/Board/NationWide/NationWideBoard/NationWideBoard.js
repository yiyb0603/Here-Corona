import React from 'react';
import './NationWideBoard.scss';
import NationWideBoardList from '../NationWideBoardList';
import { FaBars, FaPen } from 'react-icons/fa';

const NationWideBoard = () => {
    return (
        <div className ="NationWideBoard">
            <span className="NationWideBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </span>

            <div className="NationWideBoard-TitleZone">
                <span className="NationWideBoard-Title">전국 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="NationWideBoard-NoticeZone">
                <span className="NationWideBoard-Notice">공지</span>
                <span className="NationWideBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="NationWideBoard-List">
                <NationWideBoardList />
            </div>

            <button className ="writeBoard" onClick ={() => window.location ="/BoardInsert"}>
                <FaPen />
            </button>
        </div>
    );
}

export default NationWideBoard;