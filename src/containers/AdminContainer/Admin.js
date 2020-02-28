import React from "react";
import AdminPage from "./AdminPage/AdminPageContainer";
import AdminPageBar from "./AdminPageBar/AdminPageBarContainer";
import WorldWide from "./WorldWide/WorldWideContainer";
import WorldWideBar from "./WorldWideBar/WorldWideBarContainer";
import AdminAge from "./AdminAge/AdminAgeContainer";
import AdminCircle from "./AdminCircle/AdminCircleContainer";

function Admin() {
  return (
    <>
      <AdminPage />
      <AdminPageBar />
      <WorldWide />
      <WorldWideBar />
      <AdminAge />
      <AdminCircle />
    </>
  );
}

export default Admin;
