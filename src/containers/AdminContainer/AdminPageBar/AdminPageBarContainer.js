import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminPageBar from "components/Admin/AdminPageBar";

const AdminPageBarContainer = ({ store, history }) => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const { handleAdminPageBar } = store.AdminStore;
  const requestAdminPageBar = e => {
    e.preventDefault();
    const data = {
      date,
      number
    };
    handleAdminPageBar(data)
      .then(response => {
        console.log(response);
        if (response.message === "날짜별 확진자 생성 성공.") {
          Swal.fire("성공", "날짜별 확진자 생성 성공", "success");
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
    <AdminPageBar
      date={date}
      setDate={setDate}
      number={number}
      setNumber={setNumber}
      requestAdminPageBar={requestAdminPageBar}
    />
  );
};

export default inject("store")(observer(AdminPageBarContainer));
