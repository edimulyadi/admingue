import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">StigeAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="TopIconBadge">2</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Language />
              <span className="TopIconBadge">2</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Settings />
                <img src="images/edi.jpg" alt="" className="topAvatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
