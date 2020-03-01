import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";

import AdminArea from "components/Admin/AdminArea";

const AdminAreaContainer = ({ store, history }) => {
  const { handleAdminArea } = store.AdminStore;
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

  const requestZero = e => {
    e.preventDefault();
    const data = { region: 0, number: zero };
    handleAdminArea(data)
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
    const data = { region: 1, number: one };
    handleAdminArea(data)
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
    const data = { region: 2, number: two };
    handleAdminArea(data)
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
    const data = { region: 3, number: three };
    handleAdminArea(data)
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
    const data = { region: 4, number: four };
    handleAdminArea(data)
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
    const data = { region: 5, number: five };
    handleAdminArea(data)
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
    const data = { region: 6, number: six };
    handleAdminArea(data)
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
    const data = { region: 7, number: seven };
    handleAdminArea(data)
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
    const data = { region: 8, number: eight };
    handleAdminArea(data)
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
    const data = { region: 9, number: nine };
    handleAdminArea(data)
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
    const data = { region: 10, number: ten };
    handleAdminArea(data)
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
    const data = { region: 11, number: eleven };
    handleAdminArea(data)
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
    const data = { region: 12, number: twelve };
    handleAdminArea(data)
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
    const data = { region: 13, number: thirteen };
    handleAdminArea(data)
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
    const data = { region: 14, number: fourteen };
    handleAdminArea(data)
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
    const data = { region: 15, number: fifteen };
    handleAdminArea(data)
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
    const data = { region: 16, number: sixteen };
    handleAdminArea(data)
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
      <AdminArea
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
      />
    </>
  );
};

export default inject("store")(observer(AdminAreaContainer));
