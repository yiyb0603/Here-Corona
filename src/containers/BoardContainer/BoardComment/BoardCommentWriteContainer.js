import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import BoardComment from 'components/Board/BoardComment';

const BoardCommentWriteContainer = ({ store, history }) => {
  const [contents, setContents] = useState('');
  const [commentInfo, setCommentInfo] = useState([]);
  const post_idxs = JSON.parse(sessionStorage.getItem('index'));
  const { handleBoardCommentWrite, handleBoardCommentList } = store.BoardStore;

  const requestWriteComment = (e) => {
    e.preventDefault();
    const bodyParameter = {
        content: contents,
        post_idx: post_idxs
    };

    handleBoardCommentWrite(bodyParameter)
        .then(response => {
            if (response.message === "댓글 작성 성공.") {
                Swal.fire("띵동", "댓글 작성에 성공하셨습니다.", "success");
            }
            window.location.reload();
        })

        .catch (error => {
            console.log(error);
        })
  }

  const requestCommentList = useCallback((idx) => {
    idx = sessionStorage.getItem('index');
    handleBoardCommentList(idx)
      .then(response => {
        if (response.message === "댓글 목록 조회 성공.") {
          setCommentInfo(response.data.comments);
        }
      })

      .catch (error => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    requestCommentList();
  }, []);

  return (
    <BoardComment commentInfo ={commentInfo} contents ={contents} setContents ={setContents} requestWriteComment ={requestWriteComment} />
  );
};

export default inject("store")(observer(BoardCommentWriteContainer));
