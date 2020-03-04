import React from 'react';
import './SeoulBoard.scss';
import { FaBars, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SeoulBoard = ({ seoulList }) => {
    const seoulItem = seoulList.map(data => {
        return (
            <div>
                <Link to ="/BoardPage">제목: {data.title}</Link>
            </div>
        )
    })
    return (
        <div className ="SeoulBoard">
            <span className="SeoulBoard-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </span>

            <div className="SeoulBoard-TitleZone">
                <span className="SeoulBoard-Title">서울 정보 공유 게시판</span>
                <button className="sortBtn">인기순</button>
            </div>

            <div className="SeoulBoard-NoticeZone">
                <span className="SeoulBoard-Notice">공지</span>
                <span className="SeoulBoard-NoticeContents">익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.</span>
            </div>

            <div className="SeoulBoard-List">
                { seoulItem }
            </div>

            <button className ="writeBoard" onClick ={() => window.location ="/BoardInsert"}>
                <FaPen />
            </button>
        </div>
    );
}

export default SeoulBoard;