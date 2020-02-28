import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminAge from "components/Admin/AdminAge";

const AdminAgeContainer = ({ store, history }) => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive]=useState('');
  const {handleAdminAge}=store.AdminStore;
  const requestAdminAge=e=>{
    e.preventDefault();
    const data={
      one, 
      two,
      three,
      four,
      five
    };
    handleAdminAge(data)
    .then(response=>{
      if(response.message===""){
        Swal.fire('성공', "정보수정에 성공하였습니다", 'success');
      }
    })
    .catch(error=>{
      console.log(error);
      const {status}=error;
      if(status===400){
        window.alert('검증오류');
      }
    })
  }
  return(
    <>
    <AdminAge one={one} setOne={setOne} two={two} setTwo={setTwo} three={three} setThree={setThree} four={four} setFour={setFour} five={five} setFive={setFive} requestAdminAge={requestAdminAge}/>
    </>
  )
};

export default inject("store")(observer(AdminAgeContainer));