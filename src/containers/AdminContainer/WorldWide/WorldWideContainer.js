import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import WorldWide from "components/Admin/WorldWide";

const WorldWideContainer = ({ store, history }) => {
  const [confirmed, setConfirmed] = useState("");
  const [heal, setHeal] = useState("");
  const [death, setDeath] = useState("");
  const { handleWorldWide } = store.AdminStore;
  const requestWorldWide = e => {
    e.preventDefault();
    const data = {
      confirmed,
      heal,
      death
    };
    handleWorldWide(data)
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
      <WorldWide
        confirmed={confirmed}
        setConfirmed={setConfirmed}
        heal={heal}
        setHeal={setHeal}
        death={death}
        setDeath={setDeath}
        requestWorldWide={requestWorldWide}
      />
    </>
  );
};

export default inject("store")(observer(WorldWideContainer));
