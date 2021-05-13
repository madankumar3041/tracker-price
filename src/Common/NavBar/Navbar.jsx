import React, { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Main-content">
      <div className="nav-bar">
        <div className="nav-links">
          <ul>
            <li>
            <a href="#">
              <h4>Price Tracker and Recommendation Tool</h4>
            </a>
            </li>
          </ul>
          <Link to="/login">
            <button type="button" className="btn">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="btn">
              SignUp
            </button>
          </Link>
        </div>
      </div>
      <div className="banner-title">
        <h1>
          Provides
          <span>
            Competitive <br />
            Pricing On
          </span>
          Major <span>Online</span>
          Marketplaces
        </h1>
        <p>
          Strategic price recommendation. Insights to gaps in the online
          marketplaces
        </p>
       
      </div>
    </div>
  );
}

export default Navbar;
