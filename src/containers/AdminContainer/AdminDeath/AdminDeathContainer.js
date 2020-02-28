import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminDeath from "components/Admin/AdminDeath";

const AdminDeathContainer = ({ store, history }) => {
  const { handleAdminDeath } = store.AdminStore;
  const requestAdminDeath = e => {
    e.prevenDefault();
    const data = {};
    handleAdminDeath(data)
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
      <AdminDeath requestAdminDeath={requestAdminDeath} />
    </>
  );
};

export default inject("store")(observer(AdminDeathContainer));
