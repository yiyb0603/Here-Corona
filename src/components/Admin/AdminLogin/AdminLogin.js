import React from "react";
import "./AdminLogin.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const AdminLogin = ({ code, setCode, requestAdminLogin }) => {
  return (
    <form onSubmit={requestAdminLogin}>
      <TextField
        id="code"
        label="code"
        type="password"
        variant="outlined"
        className="code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        onSubmit={requestAdminLogin}
      >
        LOGIN
      </Button>
    </form>
  );
};

export default AdminLogin;
