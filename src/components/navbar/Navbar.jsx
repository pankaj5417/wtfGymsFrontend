import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.css";
export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState("false");
  const [bgColor,setbgColor]=useState("")

  const [colorChange, setColorchange] = useState(false);
  /*
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
*/
  const handlebgColor=()=>{
    if(window.scrollY >= 80){
      setbgColor("black")
    }
    else{
      setbgColor("transparent")
    }
  }
  window.addEventListener('scroll', handlebgColor);
  const handlOpenSidebar = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };
  return (
    <>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className={`navbarContainer ${colorChange?"navbarScroll":""}` }style={{backgroundColor:`${bgColor}`}} >
        <div>
          <ul className="navbarLeft">
            <li className="navbarLeft">
             
              <i onClick={handlOpenSidebar} class="fa fa-th-large fa-2x hamBar" aria-hidden="true"></i>
              <Link to="/">
              <img
                className="wtf-logo"
                src="https://wtfup.me/assets/assets/logo.png"
                alt="wtf"
              />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbarRight">
            <li>
              
                <a href="#fitness" className="navbarRightText">Fitness</a>{" "}
              
            </li>
            <li>
                <a href="#nutrition" className="navbarRightText">Nutrition</a>{" "}
            </li>
            <li>
                <a href="#gym" className="navbarRightText">Gyms</a>{" "}
            </li>
            <li>
                <a href="#wtf" className="navbarRightText">Become WTF Partner</a>{" "}
            </li>
            <li>
                <a href="#about" className="navbarRightText">About Us</a>{" "}
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
