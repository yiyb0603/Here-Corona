import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminPageBar from "components/Admin/AdminPageBar";

const AdminPageBarContainer = ({ store, history }) => {
  const [day, setDay] = useState("");
  const [person, setPerson] = useState("");
  const { handleAdminPageBar } = store.AdminStore;
  const requestAdminPageBar = e => {
    e.preventDefault();
    const data = {
      date: day,
      number: person
    };
    handleAdminPageBar(data)
      .then(response => {
        if (response.message === "날짜별 확진자 생성 성공.") {
          Swal.fire("성공", "날짜별 확진자 정보수정 성공", "success");
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
    <AdminPageBar
      day={day}
      setDay={setDay}
      person={person}
      setPerson={setPerson}
      requestAdminPageBar={requestAdminPageBar}
    />
  );
};

export default inject("store")(observer(AdminPageBarContainer));
