import React from "react";
import "./AdminDeath.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};
const AdminDeath = ({ requestAdminDeath }) => {
  return (
    <form onSubmit={requestAdminDeath}>
      <h3>사망자 현황</h3>
      <input />
      <button onSubmit={requestAdminDeath} onClick={clickChange}>
        추가하기
      </button>
    </form>
  );
};

export default AdminDeath;
