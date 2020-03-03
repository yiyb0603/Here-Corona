import React from "react";
import "./WorldWide.scss";
import TextField from "@material-ui/core/TextField";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};
const WorldWide = ({
  requestWorldWide,
  red,
  setRed,
  blue,
  setBlue,
  black,
  setBlack
}) => {
  return (
    <form onSubmit={requestWorldWide}>
      <h3 className="worldwide">국제</h3>
      <h4 className="w1">확진자</h4>
      <TextField
        value={red}
        onChange={e => setRed(e.target.value)}
        className="wor-1"
      />

      <h4 className="w2">격리해제</h4>
      <TextField
        value={blue}
        onChange={e => setBlue(e.target.value)}
        className="wor-1"
      />

      <h4 className="w3">사망자</h4>
      <TextField
        value={black}
        onChange={e => setBlack(e.target.value)}
        className="wor-1"
      />

      <button onClick={clickChange} onSubmit={requestWorldWide} className="fix">
        수정하기
      </button>
    </form>
  );
};

export default WorldWide;
