import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import BoardInsert from "components/Board/BoardInsert";

const BoardInsertContainer = ({ store, history }) => {
  const [titles, setTitles] = useState('');
  const [contents, setContents] = useState('');
  const [regions, setRegions] = useState('');
  const [file, setFile] = useState([]);
  const { handleBoardInsert, handleUploadFile } = store.BoardStore;

  const requestBoardInsert = (e) => {
    e.preventDefault();
    const bodyParameter = {
        title: titles,
        content: contents,
        region: regions,
        files: file
    };

    const fileParameter = {
      files: file
    }
  
    handleBoardInsert(bodyParameter)
      .then(response => {
          if (response.message === "글 작성 성공.") {
              Swal.fire("띵동", "글 등록에 성공하셨습니다.", "success");
              history.push("/NationWideBoard");
          }
      })
  
      .catch (error => {
          console.log(error);
      });

    handleUploadFile(fileParameter)
      .then(response => {
        console.log(response);
      })

      .catch (error => {
        console.log(error);
      })
  }

  return (
    <BoardInsert
        titles ={titles}
        setTitles ={setTitles}
        contents ={contents}
        setContents ={setContents}
        regions ={regions}
        setRegions ={setRegions}
        requestBoardInsert ={requestBoardInsert}
        file ={file}
        setFile ={setFile}
    />
  );
};

export default inject("store")(observer(BoardInsertContainer));
