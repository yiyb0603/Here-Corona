import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminHeal from "components/Admin/AdminHeal";

const AdminHealContainer = ({ store, history }) => {
  const { handleAdminHeal } = store.AdminStore;
  const requestAdminHeal = e => {
    e.prevenDefault();
    const data = {};
    handleAdminHeal(data)
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
      <AdminHeal requestAdminHeal={requestAdminHeal} />
    </>
  );
};

export default inject("store")(observer(AdminHealContainer));
