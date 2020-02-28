import React from "react";
import "./AdminCircle.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};

const AdminCircle = ({
  requestAdminCircle,
  female,
  setFemale,
  male,
  setMale
}) => {
  return (
    <form onSubmit={requestAdminCircle}>
      <h3>성별 확진자 원그래프</h3>
      <div>남</div>
      <input value={male} onChange={e => setMale(e.target.value)} />
      <div>여</div>
      <input value={female} onChange={e => setFemale(e.target.value)} />
      <button onClick={clickChange} onSubmit={requestAdminCircle}>
        수정하기
      </button>
    </form>
  );
};
