import React from 'react';
import './NewsPage.scss';
import { FaArrowLeft } from 'react-icons/fa';

const NewsPage = ({ history }) => {
    return (
        <div className ="NewsPage">
            <span className="NewsPage-Top">
                <FaArrowLeft className ="NewsPage-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>뉴스 기사보기</span>
            </span>

            <hr />

            <div className="NewsPage-Page">
                <div className="NewsPage-Page-Title">제목: 제목이 들어갈 자리</div>
                <div className ="NewsPage-Page-Writer">작성자: 관리자</div>
                <div className="NewsPage-Page-Contents">내용이 들어갈 자리</div>
            </div>
        </div>
    );
}

export default NewsPage;