import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div>
          <ul className="navbarLeft">
            <li className="navbarLeft">
              <i class="fa fa-align-left" aria-hidden="true"></i>

              <img
              className="wtf-logo"
                src="https://wtfup.me/assets/assets/logo.png"
                alt="wtf"
              />
            </li>
          </ul>
        </div>

        {/* <ul className="navbarCenter">
          <li className="navbarSearchBox">
            <input
              className="navbarSearchInput"
              type="search"
              placeholder="Search..."
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <i class="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>
          </li>
        </ul> */}

        <div>
          <ul className="navbarRight">
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightText">Fitness</span>{" "}
                
              </Link>
            </li>
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightText">Nutrition</span>{" "}
                
              </Link>
            </li>
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightText">Gyms</span>{" "}
                
              </Link>
            </li>
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightText">Become WTF Partner</span>{" "}
                
              </Link>
            </li>
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightText">About Us</span>{" "}
                
              </Link>
            </li>
            <div className="loginRegisterButtonContainer">
              <button className="login-button">Login</button>
              {/* <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-share fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-check-square-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li> */}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

