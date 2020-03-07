import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import DaejeonBoard from 'components/Board/DaejeonBoard';

const DaejeonBoardListContainer = ({ store, history }) => {
  const [daejeonList, setDaejeonList] = useState([]);
  const [popularDaejeonList, setPopularDaejeonList] = useState([]);
  const { handleDaejeonBoardList } = store.BoardStore;

  const requestDaejeonList = useCallback(() => {
    handleDaejeonBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setDaejeonList(daejeonList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  const requestTimeList = () => {
    handleDaejeonBoardList('hit')
      .then(response => {
        if (response.message === "글 목록 조회 성공.") {
          setPopularDaejeonList(response.data.posts);
        }
      })

      .catch (error => {
        console.log(error);
      })
  }

  useEffect(() => {
      requestDaejeonList();
  }, []);

  return (
    <DaejeonBoard daejeonList ={daejeonList} requestTimeList ={requestTimeList} popularDaejeonList ={popularDaejeonList} />
  );
};

export default inject("store")(observer(DaejeonBoardListContainer));
