import "./Sidebar.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <Fragment>
      <div className="navigation">
        <button onClick={toggleHandler} className="nav-button">
          <BsList />
        </button>
      </div>
      <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <ul onClick={toggleHandler} className="sidebar-items">
          <li className="sidebar-toggle">
            <button className="nav-button">
              <BsX />
            </button>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.classN}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
