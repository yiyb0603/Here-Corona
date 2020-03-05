import React from 'react';
import './BoardComment.scss';

const BoardComment = ({ commentInfo, contents, setContents, requestWriteComment }) => {
    const commentCount = commentInfo.length;
    const commentList = commentInfo.map(data => {
        const { content } = data;
        return (
            <div key ={data.idx}>
                <div>댓글 내용: {content}</div>
            </div>
        )
    })
    return (
        <div className ="BoardComment">
            <div className ="BoardComment-Count">댓글 { commentCount }개</div>
            <form onSubmit ={requestWriteComment}>
                <textarea type ="text" value ={contents} onChange ={e => setContents(e.target.value)} className ="BoardComment-Input" rows ="10" placeholder ="댓글을 입력해보세요." />
                <button type ="submit">완료</button>
                { commentList }
            </form>
        </div>
    );
}

export default BoardComment;