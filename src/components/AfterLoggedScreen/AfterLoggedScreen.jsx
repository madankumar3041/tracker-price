import React from "react";
import "./AfterLogged.css";
import { Link } from "react-router-dom";
function MainScreen() {
  return (
    <div className="after-content">
      <div className="nav-after">
        <div className="nav-links-after">
          <ul>
            <li>
              <a href="#/logged-into-product">
                <h4>Price Tracker and Recommendation Tool</h4>
              </a>
            </li>
            <li>
              <a href="#/list">
                <h4>Add Single Products</h4>
              </a>
            </li>{" "}
            <li>
              <a href="#/batchimport-product">
                <h4> Batch Import In System</h4>
              </a>
            </li>{" "}
            <li>
              <a href="#/userlist">
                <h4>User List</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Rule Engine</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Reports</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Your Search History</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4> Tutorials</h4>
              </a>
            </li>
            <li style={{marginTop: "7px"}}>
              {/* <button type="button" className="btn-logout">
                {" "}
                Logout
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
