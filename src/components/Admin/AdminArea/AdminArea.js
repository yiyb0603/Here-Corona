import React from "react";
import "./AdminArea.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  } else {
    window.alert("성공");
  }
};

const AdminArea = ({ requestAdminArea }) => {
  return (
    <form onSubmit={requestAdminArea}>
      <h3>국내 지역별 감염자 </h3>
      <input />
      <button
        className="save3"
        onClick={clickChange}
        onSubmit={requestAdminArea}
      ></button>
    </form>
  );
};

export default AdminArea;
