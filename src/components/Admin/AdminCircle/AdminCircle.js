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
      <h3 className="gender">성별 확진자 원그래프</h3>
      <input
        value={male}
        onChange={e => setMale(e.target.value)}
        placeholder="남"
        className="male"
      />
      <input
        value={female}
        onChange={e => setFemale(e.target.value)}
        placeholder="여"
        className="female"
      />
      <button
        onClick={clickChange}
        onSubmit={requestAdminCircle}
        className="fix2"
      >
        수정하기
      </button>
    </form>
  );
};

export default AdminCircle;
