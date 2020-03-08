import React from 'react';
import { withRouter } from 'react-router-dom';
import './BoardPage.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Callout, CalloutStatus } from "@class101/ui";
import BoardCommentWriteContainer from 'containers/BoardContainer/BoardComment/BoardCommentWriteContainer';

const BoardPage = ({ history, boardPageInfo, fileInfo }) => {
    console.log(fileInfo);
    // const files = fileInfo.map((data, index) => {
    //     return (
    //         <img src ={data} key ={index} alt ="files" />
    //     );
    // })

    const { title, content, region } = boardPageInfo;
    return (
        <div className ="BoardPage">
            <span className="BoardPage-Top">
                <FaArrowLeft className ="BoardPage-Arrow" onClick ={() => history.go(-1)}/> {/* 이전 페이지 이동 */}
                <span>{title}</span>
            </span>
            <hr />

            <Callout title={region+" 지역 게시판"} status={CalloutStatus.SUGGEST}/>
            <div className="BoardPage-Page">
                <div className="BoardPage-Page-Contents">{content}</div>
                {/* {files} */}
            </div>

            <BoardCommentWriteContainer />
        </div>
    );
}

export default withRouter(BoardPage);