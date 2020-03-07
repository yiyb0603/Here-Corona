import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import SeoulBoard from 'components/Board/SeoulBoard';

const SeoulBoardListContainer = ({ store, history }) => {
  const [seoulList, setSeoulList] = useState([]);
  const [popularSeoulList, setPopularSeoulList] = useState([]);
  const { handleSeoulBoardList } = store.BoardStore;

  const requestSeoulList = useCallback(() => {
    handleSeoulBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setSeoulList(seoulList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  const requestTimeList = () => {
    handleSeoulBoardList('hit')
      .then(response => {
        if (response.message === "글 목록 조회 성공.") {
            setPopularSeoulList(response.data.posts);
        }
      })

      .catch (error => {
        console.log(error);
      })
  }

  useEffect(() => {
      requestSeoulList();
  }, []);

  return (
    <SeoulBoard seoulList ={seoulList} requestTimeList ={requestTimeList} popularSeoulList ={popularSeoulList}/>
  );
};

export default inject("store")(observer(SeoulBoardListContainer));