import React, { useState, useCallback } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminPageBar2 from "components/Admin/AdminPageBar2";

const AdminPageBarContainer2 = ({ store, history }) => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const { handleAdminPageBar2 } = store.AdminStore;
  const requestAdminPageBar2 = useCallback(idx => {
    console.log(idx);
    handleAdminPageBar2(idx)
      .then(response => {
        if (response.message === "날짜별 확진자 수정 성공.") {
          window.alert("수정 성공");
        }
      })
      .catch(error => {
        console.log(error);
        const { status } = error;
        if (status === 400) {
          window.alert("검증오류");
        } else if (status === 404) {
          window.alert("날짜별 감염자 없음");
        }
      });
  });
  return (
    <AdminPageBar2
      date={date}
      setDate={setDate}
      number={number}
      setNumber={setNumber}
      requestAdminPageBar2={requestAdminPageBar2}
    />
  );
};

export default inject("store")(observer(AdminPageBarContainer2));
