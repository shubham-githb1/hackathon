// import React from "react";
import React, { useState } from "react";
// import Button from "./Button";
// import menuItems from "./MenuItems";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Undefined</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
        </div>
      </div>
    </div>
  );
}
