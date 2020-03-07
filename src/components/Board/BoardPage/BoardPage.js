import React from 'react';
import { withRouter } from 'react-router-dom';
import './BoardPage.scss';
import { FaArrowLeft } from 'react-icons/fa';
import BoardCommentWriteContainer from 'containers/BoardContainer/BoardComment/BoardCommentWriteContainer';

const BoardPage = ({ history, boardPageInfo, fileInfo }) => {
    console.log(fileInfo);
    const files = fileInfo.map((data, index) => {
        return (
            <img src ={data} key ={index} alt ="files" />
        );
    })

    const { title, content, region } = boardPageInfo;
    return (
        <div className ="BoardPage">
            <span className="BoardPage-Top">
                <FaArrowLeft className ="BoardPage-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>게시글 보기</span>
            </span>

            <hr />

            <div className="BoardPage-Page">
                <div className="BoardPage-Page-Title">제목: {title}</div>
                <div className="BoardPage-Page-Location">지역: {region}</div>
                <div className="BoardPage-Page-Contents">내용: {content}</div>
                {files}
            </div>

            <BoardCommentWriteContainer />
        </div>
    );
}

export default withRouter(BoardPage);