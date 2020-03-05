import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import BoardPage from 'components/Board/BoardPage';

const BoardPageContainer = ({ store, history }) => {
  const [boardPageInfo, setBoardPageInfo] = useState({});
  const { handleBoardPage } = store.BoardStore;

  const requestBoardPage = useCallback((idx) => {
      idx = sessionStorage.getItem('index');
      handleBoardPage(idx)
        .then(response => {
            if (response.message === "글 조회 성공.") {
                setBoardPageInfo(response.data.post);
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, [])

  useEffect(() => {
      requestBoardPage();
  }, []);

  return(
    <>
        <BoardPage boardPageInfo ={boardPageInfo} />
    </>
  )
};

export default inject("store")(observer(BoardPageContainer));