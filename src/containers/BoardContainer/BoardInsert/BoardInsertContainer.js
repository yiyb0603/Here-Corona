import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import BoardInsert from "components/Board/BoardInsert";
import BoardPage from "components/Board/BoardPage";

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

    handleBoardInsert(bodyParameter)
      .then(response => {
        console.log(response);
          if (response.message === "글 작성 성공.") {
              Swal.fire("띵동", "글 등록에 성공하셨습니다.", "success");
              history.push("/NationWideBoard");
          }
      })
  
      .catch (error => {
          console.log(error);
      });
  }

  const requestFileUpload = (e) => {
    e.preventDefault(); // 글 작성 버튼 호출 중지
    const formData = new FormData();
    const files = e.target.files;
    formData.append("files", files[0]);
    handleUploadFile(formData)
      .then(response => {
        console.log(response);
        console.log(response.data.files);
        if (response.message === "파일 업로드 성공.") {
          Swal.fire("띵동", "파일 업로드에 성공하였습니다", "success");
        }
      })

      .catch (error => {
        console.log(error);
      })
  }

  return (
    <>
    <BoardInsert
      titles ={titles}
      setTitles ={setTitles}
      contents ={contents}
      setContents ={setContents}
      regions ={regions}
      setRegions ={setRegions}
      requestBoardInsert ={requestBoardInsert}
      requestFileUpload ={requestFileUpload}
      file ={file}
      setFile ={setFile}
    />
    </>
  );
};

export default inject("store")(observer(BoardInsertContainer));
