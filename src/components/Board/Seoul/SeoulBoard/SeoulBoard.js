import React from 'react';
import './SeoulBoard.scss';
import SeoulBoardList from '../SeoulBoardList';
import { FaBars, FaPen } from 'react-icons/fa';

const SeoulBoard = () => {
    return (
        <div className ="SeoulBoard">
            <div className="SeoulBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </div>

            <div className="SeoulBoard-TitleZone">
                <span className="SeoulBoard-Title">서울 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="SeoulBoard-NoticeZone">
                <span className="SeoulBoard-Notice">공지</span>
                <span className="SeoulBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="SeoulBoard-List">
                <SeoulBoardList />
            </div>

            <button className ="writeBoard">
                <FaPen />
            </button>
        </div>
    );
}

export default SeoulBoard;