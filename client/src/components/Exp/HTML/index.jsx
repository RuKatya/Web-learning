import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "./htmlNavBar";

function HTMLPage() {
  const pages = ["/HTML", "History"];
  return (
    <div className="mainPageHTML">
      <SideNavBar pages={pages} />

      <Outlet />
    </div>
  );
}

export default HTMLPage;
