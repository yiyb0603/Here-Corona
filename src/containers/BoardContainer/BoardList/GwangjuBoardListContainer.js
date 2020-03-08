import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import GwangjuBoard from 'components/Board/GwangjuBoard';

const GwangjuBoardListContainer = ({ store, history }) => {
  const [gwangjuList, setGwangjuList] = useState([]);
  const [popularGwangjuList, setPopularGwangjuList] = useState([]);
  const { handleGwangjuBoardList } = store.BoardStore;

  const requestGwangjuList = useCallback(() => {
    handleGwangjuBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setGwangjuList(gwangjuList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  const requestTimeList = () => {
    handleGwangjuBoardList('hit')
      .then(response => {
        if (response.message === "글 목록 조회 성공.") {
          setPopularGwangjuList(response.data.posts);
        }
      })

      .catch (error => {
        console.log(error);
      })
  }

  useEffect(() => {
      requestGwangjuList();
  }, []);

  return (
    <GwangjuBoard gwangjuList ={gwangjuList} requestTimeList ={requestTimeList} popularGwangjuList ={popularGwangjuList} />
  );
};

export default inject("store")(observer(GwangjuBoardListContainer));
