import React from 'react';
import './BoardPage.scss';
import { FaArrowLeft } from 'react-icons/fa';

const BoardPage = ({ history }) => {
    return (
        <div className ="BoardPage">
            <span className="BoardPage-Top">
                <FaArrowLeft className ="BoardPage-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>게시글 보기</span>
            </span>

            <hr />

            <div className="BoardPage-Page">
                <div className="BoardPage-Page-Title">제목: 제목이 들어갈 자리</div>
                <div className="BoardPage-Page-Location">지역: 지역이 들어갈 자리</div>
                <div className="BoardPage-Page-Contents">내용이 들어갈 자리</div>
            </div>
        </div>
    );
}

export default BoardPage;