import React, { useState } from "react";
import sha512 from "js-sha512";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

import AdminLogin from "../../../components/Admin/AdminLogin";

const AdminLoginContainer = ({ store, history }) => {
  const [code, setCode] = useState("");
  const { handleAdminLogin } = store.AdminStore;
  const requestAdminLogin = e => {
    e.preventDefault();
    const data = {
      c: sha512(code)
    };
    handleAdminLogin(data)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          Swal.fire("성공", "로그인에 성공하였습니다", "success");
          localStorage.setItem(
            "x-access-token",
            response.data["x-access-token"]
          );
          history.push("/");
        }
      })
      .catch(error => {
        console.log(error);
        const { status } = error;
        if (status === 400) {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "검증 오류"
          });
        } else if (status === 401) {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "인증 실패"
          });
        }
      });
  };
  return (
    <>
      <AdminLogin
        code={code}
        setCode={setCode}
        requestAdminLogin={requestAdminLogin}
      />
    </>
  );
};
export default inject("store")(observer(AdminLoginContainer));
