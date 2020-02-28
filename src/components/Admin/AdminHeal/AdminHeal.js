import React from "react";
import "./AdminHeal.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};
const AdminHeal = ({ requestAdminHeal }) => {
  return (
    <form onSubmit={requestAdminHeal}>
      <h3>격리 해제 현황</h3>
      <input />
      <button onSubmit={requestAdminHeal} onClick={clickChange}>
        추가하기
      </button>
    </form>
  );
};

export default AdminHeal;
