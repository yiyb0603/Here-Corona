import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import BusanBoard from "components/Board/BusanBoard";

const BusanBoardListContainer = ({ store, history }) => {
  const [busanList, setBusanList] = useState([]);
  const { handleBusanBoardList } = store.BoardStore;

  const requestBusanList = useCallback(() => {
    handleBusanBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setBusanList(busanList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  useEffect(() => {
      requestBusanList();
  }, []);

  return (
    <BusanBoard busanList ={busanList} />
  );
};

export default inject("store")(observer(BusanBoardListContainer));