import React from "react";
import "./AdminWorld.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};

const AdminWorld = ({
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
  requestSeventeen,
  requestEighteen,
  requestNineteen,
  requestTwenty,
  requestTwentyone,
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
  setSixteen,
  seventeen,
  setSeventeen,
  eighteen,
  setEighteen,
  nineteen,
  setNineteen,
  twenty,
  setTwenty,
  twentyone,
  setTwentyone
}) => {
  return (
    <>
      <h3 className="worldtitle">국가별 감염자</h3>
      <div className="worldarea">
        <form onSubmit={requestZero}>
          <input
            placeholder="중국"
            value={zero}
            onChange={e => setZero(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestOne}>
          <input
            placeholder="한국"
            value={one}
            onChange={e => setOne(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestTwo}>
          <input
            placeholder="이탈리아"
            value={two}
            onChange={e => setTwo(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestThree}>
          <input
            placeholder="일본"
            value={three}
            onChange={e => setThree(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestFour}>
          <input
            placeholder="이란"
            value={four}
            onChange={e => setFour(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestFive}>
          <input
            placeholder="싱가포르"
            value={five}
            onChange={e => setFive(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestSix}>
          <input
            placeholder="홍콩"
            value={six}
            onChange={e => setSix(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestSeven}>
          <input
            placeholder="독일"
            value={seven}
            onChange={e => setSeven(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestEight}>
          <input
            placeholder="미국"
            value={eight}
            onChange={e => setEight(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestNine}>
          <input
            placeholder="프랑스"
            value={nine}
            onChange={e => setNine(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestTen}>
          <input
            placeholder="쿠웨이트"
            value={ten}
            onChange={e => setTen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestEleven}>
          <input
            placeholder="스페인"
            value={eleven}
            onChange={e => setEleven(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestTwelve}>
          <input
            placeholder="태국"
            value={twelve}
            onChange={e => setTwelve(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestThirteen}>
          <input
            placeholder="대만"
            value={thirteen}
            onChange={e => setThirteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestFourteen}>
          <input
            placeholder="바레인"
            value={fourteen}
            onChange={e => setFourteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestFifteen}>
          <input
            placeholder="호주"
            value={fifteen}
            onChange={e => setFifteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestSixteen}>
          <input
            placeholder="말레이시아"
            value={sixteen}
            onChange={e => setSixteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestSeventeen}>
          <input
            placeholder="영국"
            value={seventeen}
            onChange={e => setSeventeen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestEighteen}>
          <input
            placeholder="캐나다"
            value={eighteen}
            onChange={e => setEighteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestNineteen}>
          <input
            placeholder="스위스"
            value={nineteen}
            onChange={e => setNineteen(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestTwenty}>
          <input
            placeholder="스웨덴"
            value={twenty}
            onChange={e => setTwenty(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>

        <form onSubmit={requestTwentyone}>
          <input
            placeholder="인도"
            value={twentyone}
            onChange={e => setTwentyone(e.target.value)}
          />
          <button onClick={clickChange}>수정하기</button>
          <br />
        </form>
      </div>
    </>
  );
};

export default AdminWorld;
