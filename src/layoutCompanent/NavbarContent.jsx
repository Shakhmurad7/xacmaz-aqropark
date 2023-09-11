import React, { useState } from "react";
import NavBar from "../Pages/NavbarPage/NavBar";
import "../Style.css";
import { Link } from "react-router-dom";

function NavbarContent() {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <NavBar menu={menu} setmenu={setmenu} />
      <div className="big-container">
        <div className="header-content-block">
          <Link to={"/"}>
            {" "}
            <img src={"./img/Group 169.png"} />
          </Link>
          <div className="header-menu-icon">
            <div className="header-lag">
              <p>En</p>
              <p>Ru</p>
            </div>
            <div className="menu-icon" onClick={() => setmenu(!menu)}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarContent;
