import React from "react";
import DrawerToggleButton from "../DrawerToggle/DrawerToggleButton";
import "./toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClick} />
      </div>
      <div className="toolbar__logo">
        <a href="https://github.com/ivanaimufua41?tab=repositories">Ivan Aimufua</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
