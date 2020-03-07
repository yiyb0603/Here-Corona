import React from "react";
import "./AdminArea.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};

const AdminArea = ({
  requestZero,
  requestOne,
  requestTwo,
  requestThree,
  requestFour,
  requestFive,
  requestSix,
  requestSeven,
  requestEight,
  requestNine,
  requestTen,
  requestEleven,
  requestTwelve,
  requestThirteen,
  requestFourteen,
  requestFifteen,
  requestSixteen,
  zero,
  setZero,
  one,
  setOne,
  two,
  setTwo,
  three,
  setThree,
  four,
  setFour,
  five,
  setFive,
  six,
  setSix,
  seven,
  setSeven,
  eight,
  setEight,
  nine,
  setNine,
  ten,
  setTen,
  eleven,
  setEleven,
  twelve,
  setTwelve,
  thirteen,
  setThirteen,
  fourteen,
  setFourteen,
  fifteen,
  setFifteen,
  sixteen,
  setSixteen
}) => {
  return (
    <>
      <h3 className="areatitle">국내 지역별 감염자 </h3>
      <div className="adminarea">
        <form onSubmit={requestZero}>
          <input
            placeholder="서울"
            value={zero}
            onChange={e => setZero(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>

          <br />
        </form>
        <form onSubmit={requestOne}>
          <input
            placeholder="세종"
            value={one}
            onChange={e => setOne(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestTwo}>
          <input
            placeholder="인천"
            value={two}
            onChange={e => setTwo(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestThree}>
          <input
            placeholder="부산"
            value={three}
            onChange={e => setThree(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestFour}>
          <input
            placeholder="대구"
            value={four}
            onChange={e => setFour(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestFive}>
          <input
            placeholder="광주"
            value={five}
            onChange={e => setFive(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestSix}>
          <input
            placeholder="대전"
            value={six}
            onChange={e => setSix(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestSeven}>
          <input
            placeholder="울산"
            value={seven}
            onChange={e => setSeven(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestEight}>
          <input
            placeholder="경기"
            value={eight}
            onChange={e => setEight(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestNine}>
          <input
            placeholder="강원"
            value={nine}
            onChange={e => setNine(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestTen}>
          <input
            placeholder="충남"
            value={ten}
            onChange={e => setTen(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestEleven}>
          <input
            placeholder="충북"
            value={eleven}
            onChange={e => setEleven(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestTwelve}>
          <input
            placeholder="전남"
            value={twelve}
            onChange={e => setTwelve(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestThirteen}>
          <input
            placeholder="전북"
            value={thirteen}
            onChange={e => setThirteen(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestFourteen}>
          <input
            placeholder="경남"
            value={fourteen}
            onChange={e => setFourteen(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestFifteen}>
          <input
            placeholder="경북"
            value={fifteen}
            onChange={e => setFifteen(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
        <form onSubmit={requestSixteen}>
          <input
            placeholder="제주"
            value={sixteen}
            onChange={e => setSixteen(e.target.value)}
          ></input>
          <button onClick={clickChange}>수정하기</button>
        </form>
      </div>
    </>
  );
};

export default AdminArea;
