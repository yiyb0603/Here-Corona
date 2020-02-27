import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './BoardInsert.scss';

const BoardInsert = ({ history }) => {
    return (
        <div className ="BoardInsert">
            <span className="BoardInsert-Top">
                <FaArrowLeft className ="BoardInsert-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>게시글 작성하기</span>
            </span>

            <hr />

            <div className="BoardInsert-Insert">
                <input type ="text" maxlength ="20" required className ="BoardInsert-Insert-Title" placeholder ="제목을 입력하세요." />
                <div className ="BoardInsert-Insert-Choice">
                    <select className ="BoardInsert-Insert-Choice-Select">
                        <option value ="서울">서울</option>
                        <option value ="대구">대구</option>
                        <option value ="부산">부산</option>
                        <option selected>지역을 선택하세요.</option>
                    </select>
                </div>

                <textarea className="BoardInsert-Insert-Contents" required placeholder ="내용을 입력하세요." />
                <button className ="BoardInsert-Button">완료</button>
            </div>
        </div>
    );
}

export default BoardInsert;