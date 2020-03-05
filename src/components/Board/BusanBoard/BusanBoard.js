import React from 'react';
import './BusanBoard.scss';
import { FaBars, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BusanBoard = ({ busanList }) => {
    const busanItem = busanList.map(data => {
        const { idx, title } = data;
        return (
            <div key ={idx}>
                <Link to ="/BoardPage" onClick ={() => {
                    sessionStorage.setItem('index', idx);
                }}>제목: {title}</Link>
            </div>
        )
    })
    return (
        <div className ="BusanBoard">
            <div className="BusanBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </div>

            <div className="BusanBoard-TitleZone">
                <span className="BusanBoard-Title">부산 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="BusanBoard-NoticeZone">
                <span className="BusanBoard-Notice">공지</span>
                <span className="BusanBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="BusanBoard-List">
                {busanItem}
            </div>

            <button className ="writeBoard" onClick ={() => window.location ="/BoardInsert"}>
                <FaPen />
            </button>
        </div>
    );
}

export default BusanBoard;