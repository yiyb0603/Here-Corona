import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import NationWideBoard from 'components/Board/NationWideBoard';

const NationWideBoardListContainer = ({ store, history }) => {
  const [nationWideList, setNationWideList] = useState([]);
  const { handleNationWideBoardList } = store.BoardStore;

  const requestNationWideList = useCallback(() => {
    handleNationWideBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setNationWideList(nationWideList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  useEffect(() => {
      requestNationWideList();
  }, []);

  return (
    <NationWideBoard nationList = {nationWideList} />
  );
};

export default inject("store")(observer(NationWideBoardListContainer));