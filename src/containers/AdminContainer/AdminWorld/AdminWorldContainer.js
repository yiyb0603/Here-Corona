import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminWorld from "components/Admin/AdminWorld";

const AdminWorldContainer = ({ store, history }) => {
  const { handleAdminWorld } = store.AdminStore;
  const [zero, setZero] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [ten, setTen] = useState("");
  const [eleven, setEleven] = useState("");
  const [twelve, setTwelve] = useState("");
  const [thirteen, setThirteen] = useState("");
  const [fourteen, setFourteen] = useState("");
  const [fifteen, setFifteen] = useState("");
  const [sixteen, setSixteen] = useState("");
  const [seventeen, setSeventeen] = useState("");
  const [eighteen, setEighteen] = useState("");
  const [nineteen, setNineteen] = useState("");
  const [twenty, setTwenty] = useState("");
  const [twentyone, setTwentyone] = useState("");

  const requestZero = e => {
    e.preventDefault();
    const data = { nation: 0, number: zero };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestOne = e => {
    e.preventDefault();
    const data = { nation: 1, number: one };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestTwo = e => {
    e.preventDefault();
    const data = { nation: 2, number: two };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestThree = e => {
    e.preventDefault();
    const data = { nation: 3, number: three };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestFour = e => {
    e.preventDefault();
    const data = { nation: 4, number: four };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestFive = e => {
    e.preventDefault();
    const data = { nation: 5, number: five };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestSix = e => {
    e.preventDefault();
    const data = { nation: 6, number: six };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestSeven = e => {
    e.preventDefault();
    const data = { nation: 7, number: seven };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestEight = e => {
    e.preventDefault();
    const data = { nation: 8, number: eight };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestNine = e => {
    e.preventDefault();
    const data = { nation: 9, number: nine };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestTen = e => {
    e.preventDefault();
    const data = { nation: 10, number: ten };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestEleven = e => {
    e.preventDefault();
    const data = { nation: 11, number: eleven };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestTwelve = e => {
    e.preventDefault();
    const data = { nation: 12, number: twelve };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestThirteen = e => {
    e.preventDefault();
    const data = { nation: 13, number: thirteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestFourteen = e => {
    e.preventDefault();
    const data = { nation: 14, number: fourteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestFifteen = e => {
    e.preventDefault();
    const data = { nation: 15, number: fifteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestSixteen = e => {
    e.preventDefault();
    const data = { nation: 16, number: sixteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestSeventeen = e => {
    e.preventDefault();
    const data = { nation: 17, number: seventeen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestEighteen = e => {
    e.preventDefault();
    const data = { nation: 18, number: eighteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestNineteen = e => {
    e.preventDefault();
    const data = { nation: 19, number: nineteen };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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

  const requestTwenty = e => {
    e.preventDefault();
    const data = { nation: 20, number: twenty };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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
  const requestTwentyone = e => {
    e.preventDefault();
    const data = { nation: 21, number: twentyone };
    handleAdminWorld(data)
      .then(response => {
        if (response.message === "수정 성공.") {
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
      <AdminWorld
        zero={zero}
        setZero={setZero}
        one={one}
        setOne={setOne}
        two={two}
        setTwo={setTwo}
        three={three}
        setThree={setThree}
        four={four}
        setFour={setFour}
        five={five}
        setFive={setFive}
        six={six}
        setSix={setSix}
        seven={seven}
        setSeven={setSeven}
        eight={eight}
        setEight={setEight}
        nine={nine}
        setNine={setNine}
        ten={ten}
        setTen={setTen}
        eleven={eleven}
        setEleven={setEleven}
        twelve={twelve}
        setTwelve={setTwelve}
        thirteen={thirteen}
        setThirteen={setThirteen}
        fourteen={fourteen}
        setFourteen={setFourteen}
        fifteen={fifteen}
        setFifteen={setFifteen}
        sixteen={sixteen}
        setSixteen={setSixteen}
        setSeventeen={setSeventeen}
        setEighteen={setEighteen}
        setNineteen={setNineteen}
        setTwenty={setTwenty}
        setTwentyone={setTwentyone}
        requestZero={requestZero}
        requestOne={requestOne}
        requestTwo={requestTwo}
        requestThree={requestThree}
        requestFour={requestFour}
        requestFive={requestFive}
        requestSix={requestSix}
        requestSeven={requestSeven}
        requestEight={requestEight}
        requestNine={requestNine}
        requestTen={requestTen}
        requestEleven={requestEleven}
        requestTwelve={requestTwelve}
        requestThirteen={requestThirteen}
        requestFourteen={requestFourteen}
        requestFifteen={requestFifteen}
        requestSixteen={requestSixteen}
        requestSeventeen={requestSeventeen}
        requestEighteen={requestEighteen}
        requestNineteen={requestNineteen}
        requestTwenty={requestTwenty}
        requestTwentyone={requestTwentyone}
      />
    </>
  );
};

export default inject("store")(observer(AdminWorldContainer));
