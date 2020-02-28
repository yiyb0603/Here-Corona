import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminCircle from "components/Admin/AdminCircle";

const AdminCircleContainer = ({ store, history }) => {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const { handleAdminCircle } = store.AdminStore;
  const requestAdminCircle = e => {
    e.preventDefault();
    const data = {
      male,
      female
    };
    handleAdminCircle(data)
      .then(response => {
        if (response.message === "") {
          Swal.fire("성공", "정보수정에 성공하였습니다", "success");
        }
      })
      .catch(error => {
        console.log(error);
        const { status } = error;
        if (status === 400) {
          window.alert("검증오류");
        }
      });
  };
  return (
    <>
      <AdminCircle
        male={male}
        setMale={setMale}
        female={female}
        setFemale={setFemale}
        requestAdminCircle={requestAdminCircle}
      />
    </>
  );
};

export default inject("store")(observer(AdminCircleContainer));
