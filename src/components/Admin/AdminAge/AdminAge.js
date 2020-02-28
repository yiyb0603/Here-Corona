import React from "react";
import "./AdminAge.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};

const AdminAge = ({
  requestAdminAge,
  one,
  setOne,
  two,
  setTwo,
  three,
  setThree,
  four,
  setFour,
  five,
  setFive
}) => {
  return (
    <form onSubmit={requestAdminAge}>
      <h3 className="agebar">나이대별 확진자 바그래프</h3>
      <input
        value={one}
        onChange={e => setOne(e.target.value)}
        placeholder="10대"
        className="a1"
      />
      <input
        value={two}
        onChange={e => setTwo(e.target.value)}
        className="a2"
        placeholder="20대"
      />

      <input
        value={three}
        onChange={e => setThree(e.target.value)}
        placeholder="30대"
        className="a3"
      />

      <input
        value={four}
        onChange={e => setFour(e.target.value)}
        placeholder="40대"
        className="a4"
      />

      <input
        value={five}
        onChange={e => setFive(e.target.value)}
        placeholder="50대"
        className="a5"
      />
      <button
        onClick={clickChange}
        onSubmit={requestAdminAge}
        className="save3"
      >
        수정하기
      </button>
      <div className="underbox"></div>
    </form>
  );
};
export default AdminAge;
