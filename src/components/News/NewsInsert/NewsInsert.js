import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './NewsInsert.scss';

const NewsInsert = ({ history }) => {
    const isToken = localStorage.getItem('x-access-token');
    if (!isToken) {
        window.alert("작성 권한이 없습니다.");
        history.go(-1);
    }
    return (
        <div className ="NewsInsert">
            <span className="NewsInsert-Top">
                <FaArrowLeft className ="NewsInsert-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>뉴스 기사 작성하기</span>
            </span>

            <hr />

            <div className="NewsInsert-Insert">
                <input type ="text" maxlength ="20" required className ="NewsInsert-Insert-Title" placeholder ="제목을 입력하세요." />
                <textarea className="NewsInsert-Insert-Contents" rows ="20" required placeholder ="내용을 입력하세요." />
                <button className ="NewsInsert-Button">완료</button>
            </div>
        </div>
    );
}

export default NewsInsert;