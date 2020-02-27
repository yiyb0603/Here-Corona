import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminPage from "components/Admin/AdminPage";

const AdminPageContainer = ({ store, history }) => {
  const [red, setRed] = useState("");
  const [orange, setOrange] = useState("");
  const [blue, setBlue] = useState("");
  const [black, setBlack] = useState("");
  const { handleAdminPage } = store.AdminStore;
  const requestAdminPage = e => {
    e.preventDefault();
    const data = {
      confirmed: red,
      heal: blue,
      death: black,
      check: orange
    };
    handleAdminPage(data)
      .then(response => {
        if (response.message === "수정 성공.") {
          Swal.fire("성공", "정보수정에 성공하였습니다", "success");
          history.push("/");
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
      <AdminPage
        red={red}
        setRed={setRed}
        orange={orange}
        setOrange={setOrange}
        blue={blue}
        setBlue={setBlue}
        black={black}
        setBlack={setBlack}
        requestAdminPage={requestAdminPage}
      />
    </>
  );
};
export default inject("store")(observer(AdminPageContainer));
