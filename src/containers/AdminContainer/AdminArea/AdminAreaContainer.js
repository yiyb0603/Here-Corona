import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminArea from "components/Admin/AdminArea";

const AdminAreaContainer = ({ store, history }) => {
  const { handleAdminArea } = store.AdminStore;
  const requestAdminArea = e => {
    e.preventDefault();
    const data = {};
    handleAdminArea(data)
      .then(response => {
        if (response.messages === "") {
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
      <AdminArea />
    </>
  );
};

export default inject("store")(observer(AdminAreaContainer));
