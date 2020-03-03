import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import WorldWide from "components/Admin/WorldWide";

const WorldWideContainer = ({ store, history }) => {
  const [red, setRed] = useState("");
  const [blue, setBlue] = useState("");
  const [black, setBlack] = useState("");
  const { handleWorldWide } = store.AdminStore;
  const requestWorldWide = e => {
    e.preventDefault();
    const data = {
      confirmed: red,
      heal: blue,
      death: black
    };
    handleWorldWide(data)
      .then(response => {
        if (response.messages === "수정 성공.") {
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
      <WorldWide
        red={red}
        setRed={setRed}
        blue={blue}
        setBlue={setBlue}
        black={black}
        setBlack={setBlack}
        requestWorldWide={requestWorldWide}
      />
    </>
  );
};

export default inject("store")(observer(WorldWideContainer));
