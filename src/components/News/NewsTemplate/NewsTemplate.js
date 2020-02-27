import React from 'react';
import './NewsTemplate.scss';
import { FaBars, FaPen } from 'react-icons/fa';
import NewsItem from '../NewsItem';

const NewsTemplate = () => {
    const isToken = localStorage.getItem('x-access-token');
    return (
        <div className ="NewsTemplate">
            <span className="NewsTemplate-Top">
                <FaBars className ="showNavbar" />
                <input type ="text" className ="boardSearch" placeholder ="검색어를 입력하세요." />
            </span>

            <div className="NewsTemplate-TitleZone">
                <span className="NewsTemplate-Title">REAL 코로나 뉴스</span>
            </div>

            <div className="NewsTemplate-NoticeZone">
                <span className="NewsTemplate-Notice">공지</span>
                <span className="NewsTemplate-NoticeContents">이 게시글은 관리자만 작성가능 한 곳입니다.</span>
            </div>

            <div className="NewsTemplate-List">
                <NewsItem />
            </div>

            {
                // 토큰 유/무에 따른 버튼 보임
                isToken ? <button className ="writeBoard">
                <FaPen />
            </button> : <></>
            }
        </div>
    );
}

export default NewsTemplate;