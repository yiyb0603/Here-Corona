import React, { useState } from "react";
// import sha512 from "js-sha512";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

import AdminLogin from "../../components/Admin/AdminLogin";

const AdminContainer = ({ store, history }) => {
  const [code, setCode] = useState("");
};
export default inject("store")(observer(AdminContainer));
