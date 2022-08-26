import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBalanceScale, FaBeer, FaCogs, FaGem, FaHeart, FaChartArea } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "./sidebar.css";
import { useState } from "react";
export const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };
  return (
    <>
      <ProSidebar className="sidebar" collapsedWidth="30px" width="270px" collapsed={menuCollapse}>
      <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {/* <i class="fa fa-align-left" aria-hidden="true"></i> */}

              {menuCollapse ? (
                 <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
               )} 
            </div>
        <Menu className="sidebarList">
          <MenuItem className="sidebarListItemFirst">
            <i
              className="fa fa-gavel sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>
            <span className="sidebarListItemText">Login/Signup</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <i class="fa fa-power-off" aria-hidden="true"></i> */}
            <button>Login</button>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-home sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">Fitness</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-user-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">Nutrition</span>
          </MenuItem>
         
           
         

          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-repeat sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText ">Gyms</span>
          </MenuItem>

          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-file-text-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">Become WTF Partner</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-file-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">About Us</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-bars sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">Login/Signup</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-tasks sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">TASKS</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-ticket sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

           </MenuItem>
           </Menu>
      </ProSidebar>
      
     
    </>
  );
};
