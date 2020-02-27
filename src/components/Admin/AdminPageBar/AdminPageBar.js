import React from "react";
import "./AdminPageBar.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  } else {
    window.alert("성공");
    window.location = "/";
  }
};
const AdminPageBar = ({
  requestAdminPageBar,
  day,
  setDay,
  person,
  setPerson
}) => {
  return (
    <form onSubmit={requestAdminPageBar}>
      <h3 className="bar1">국내 확진환자 현황 바그래프</h3>
      <h4 className="addbar">추가하기</h4>
      <input
        placeholder="날짜"
        className="day"
        value={day}
        onChange={e => setDay(e.target.value)}
      />
      <input
        placeholder="사람 수"
        className="setDay"
        value={person}
        onChange={e => setPerson(e.target.vaule)}
      />
      <button
        className="sub"
        onClick={clickChange}
        onSubmit={requestAdminPageBar}
      >
        추가하기
      </button>
    </form>
  );
};

export default AdminPageBar;
