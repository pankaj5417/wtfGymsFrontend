import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.css";
export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState("false");
  const handlOpenSidebar = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };
  return (
    <>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="navbarContainer">
        <div>
          <ul className="navbarLeft">
            <li className="navbarLeft">
              <i
                onClick={handlOpenSidebar}
                class="fa fa-align-left hamBar"
                aria-hidden="true"
              ></i>

              <img
                className="wtf-logo"
                src="https://wtfup.me/assets/assets/logo.png"
                alt="wtf"
              />
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbarRight">
            <li>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <span className="navbarRightText">Fitness</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <span className="navbarRightText">Nutrition</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <span className="navbarRightText">Gyms</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <span className="navbarRightText">Become WTF Partner</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="" style={{ textDecoration: "none", color: "white" }}>
                <span className="navbarRightText">About Us</span>{" "}
              </Link>
            </li>
            <div className="loginRegisterButtonContainer">
              <button className="login-button">Login</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
