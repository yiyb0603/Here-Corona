import React from 'react';
import './AdminAge.scss';

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};

const AdminAge=({
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
})=>{
  return(
    <form onSubmit={requestAdminAge}>
      <h3>나이대별 확진자 바그래프</h3>
      <div>10대</div>
      <input value={one} onChange={e=>setOne(e.target.value)}/>
      <div>20대</div>
      <input value={two} onChange={e=>setTwo(e.target.value)}/>

      <div>30대</div>
      <input value={three} onChange={e=>setThree(e.target.value)}/>

      <div>40대</div>
      <input value={four} onChange={e=>setFour(e.target.value)}/>

      <div>50대</div>
      <input value={five} onChange={e=>setFive(e.target.value)}/>
  <button onClick={clickChange} onSubmit={requestAdminAge}>수정하기</button>
    </form>

  )
}
export default AdminAge;