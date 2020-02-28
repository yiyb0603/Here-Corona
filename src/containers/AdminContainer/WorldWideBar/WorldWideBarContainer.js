import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import WorldWideBar from "components/Admin/WorldWideBar";

const WorldWideBarContainer = ({ store, history }) => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const { handleWorldWideBar } = store.AdminStore;
  const requestWorldWideBar = e => {
    e.preventDefault();
    const data = {
      date,
      number
    };
    handleWorldWideBar(data)
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
    <WorldWideBar
      date={date}
      setDate={setDate}
      number={number}
      setNumber={setNumber}
      requestWorldWideBar={requestWorldWideBar}
    />
  );
};

export default inject("store")(observer(WorldWideBarContainer));
