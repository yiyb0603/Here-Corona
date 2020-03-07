import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import "./BoardInsert.scss";

const BoardInsert = ({
  history,
  titles,
  setTitles,
  contents,
  setContents,
  regions,
  setRegions,
  file,
  setFile,
  requestBoardInsert,
  requestFileUpload
}) => {
  return (
    <div className="BoardInsert">
      <span className="BoardInsert-Top">
        <FaArrowLeft
          className="BoardInsert-Arrow"
          onClick={() => history.go(-1)}
        />{" "}
        {/* 이전 페이지 이동 */}
        <span className="writesss">게시글 작성하기</span>
      </span>

      <hr />

      <form onSubmit={requestBoardInsert} className="BoardInsert-Insert">
        <input
          type="text"
          value={titles}
          onChange={e => setTitles(e.target.value)}
          maxLength="20"
          required
          className="BoardInsert-Insert-Title"
          placeholder="제목을 입력하세요."
        />
        <div className="BoardInsert-Insert-Choice">
          <select
            onChange={e => setRegions(e.target.value)}
            className="BoardInsert-Insert-Choice-Select"
          >
            <option value="-1">지역을 선택하세요.</option>
            <option value="0">서울</option>
            <option value="4">대구</option>
            <option value="3">부산</option>
            <option value ="5">광주</option>
            <option value ="6">대전</option>
          </select>
        </div>

        <textarea
          value={contents}
          onChange={e => setContents(e.target.value)}
          className="BoardInsert-Insert-Contents"
          rows="15"
          required
          placeholder="내용을 입력하세요."
        />
        {/* <input type ="file" className ="BoardInsert-Insert-File" onChange = {requestFileUpload}/> */}
        {/* <button onClick ={requestFileUpload}>파일 업로드</button> */}
        <button type="submit" className="BoardInsert-Button">
          작성하기
        </button>
      </form>
    </div>
  );
};

export default withRouter(BoardInsert);
