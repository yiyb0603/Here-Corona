import React from 'react';
import './BoardComment.scss';
import DaeguBoard from 'components/Board/DaeguBoard';
import { MdSend } from "react-icons/md";
import { Divider } from '@material-ui/core';

const BoardComment = ({ commentInfo, contents, setContents, requestWriteComment }) => {
    const commentCount = commentInfo.length;
    const commentList = commentInfo.map(data => {
        const { content } = data;
        return (
            <div key ={data.idx} className ="BoardComment-Comment">
                {content} <Divider/>
            </div>
        )
    })
    return (
        <>
        <Divider/>
        <div className ="BoardComment">
            <div className ="BoardComment-Count">댓글 { commentCount }개</div>
            <form onSubmit ={requestWriteComment}>
                <textarea type ="text" value ={contents} onChange ={e => setContents(e.target.value)} className ="BoardComment-Input" rows ="10" placeholder ="댓글을 입력해보세요." />
                <button type ="submit" className="BoardComment-sendBtn"><MdSend className="BoardComment-Icon"/></button>
                { commentList }
            </form>
        </div>
        </>
    );
}

export default BoardComment;