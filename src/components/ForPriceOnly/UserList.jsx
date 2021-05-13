import React from "react";
import { Link } from "react-router-dom";
function UserList() {
  return (
    <div className="import-main">
      <div className="nav-gation">
        <div className="nav-bor">
          <ul>
            <li>
              <a href="#/logged-into-product">
                <h4>Price Tracker and Recommendation Tool</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="user-list-main-content"
        style={{ width: "100%", height: "100vh" }}
      >
         <Link to="/userserach-history">
         <button>Previous Search History</button>
        </Link>
       
        <Link to="/forprice-only">
          <button>Search Transaction</button>
        </Link>
      </div>
    </div>
  );
}

export default UserList;
