import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Toggle button only visible when sidebar is hidden */}
      {!collapsed && (
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(true)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      )}

      <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        {collapsed && (
          <button
            className="close-sidebar"
            onClick={() => setCollapsed(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        )}

        <div className="brand">
          <div style={{ textAlign: "center", width: "100%" }}>
            <Link to="/">
              Anusuya Software Solutions
            </Link>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/Home" onClick={()=>setCollapsed(false)}>Home</Link>
          </li>
          <li>
            <Link to="/Projects" onClick={()=>setCollapsed(false)}>Our Projects</Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={()=>setCollapsed(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={()=>setCollapsed(false)}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;