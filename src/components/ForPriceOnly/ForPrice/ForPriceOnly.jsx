import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Constant from "../../../Constant";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const refreshToken = localStorage.getItem("refreshToken");

const authAxios = axios.create({
  baseURL: Constant.getAPI() + "/api/v1/",
});
const refreshAuthLogic = (failedRequest) =>
  axios
    .post(Constant.getAPI() + "/api/v1/user/token/refresh/", {
      refresh: refreshToken,
    })
    .then((tokenRefreshResponse) => {
      localStorage.setItem("accessToken", tokenRefreshResponse.data.access);
      console.log("New token generated");
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });
authAxios.defaults.headers.post["Content-Type"] = "application/json";
createAuthRefreshInterceptor(authAxios, refreshAuthLogic);
function ForPriceOnly(props) {
  const [isLoading, setLoading] = useState(false);
  const [uploadFile, setUploadFile] = useState([]);
  const [newBatch, setnewBatch] = useState([]);

  const searchProduct = () => {
    authAxios.interceptors.request.use((request) => {
      request.headers["Authorization"] = `Bearer ${getAccessToken()}`;
      // request.headers['Content-Type'] = 'multipart/form-data';
      request.headers["Content-Type"] = "application/json";

      console.log(request);
      return request;
    });
    function getAccessToken() {
      return localStorage.getItem("accessToken");
    }
    const formingData = new FormData();
    formingData.append("csv_file", newBatch.selectedFile);
    debugger;
    setLoading(true);
    authAxios
      .post(Constant.getAPI() + "/priceprediction/v5/ptc/", formingData)
      .then((response) => {
        debugger;
        console.log("success:", response);
        setnewBatch(response?.data);
        props.history.push({ pathname: '/forPrice-data', state: Object.entries(response?.data?.data), time_date:response?.data?.updated_on});
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error?.response?.data?.message);
        if (error?.response?.status === 500) {
          alert("server Error");
        } else alert(error?.response);
      });
  };
  const handleselectedFile = (event) => {
    setUploadFile({
      selectedFile: event?.target?.files[0]?.name,
    });
    setnewBatch({
      selectedFile: event?.target?.files[0],
    });
  };
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
      <div className="import-csv">
        <div className="import-heading">
          <h3>Search Transactions</h3>
        </div>
        <div class="Main-csv-import">
          <input
            type="file"
            id="file"
            class="uploading-csv"
            name="file"
            onChange={handleselectedFile}
          />
          <label for="file">Select File</label>
          <h5>{uploadFile.selectedFile}</h5>
        </div>
        <div className="btton">
          <button className="import-bttn">
            <a href="new_sku1.csv" download="Products.csv">
              Sample Csv{" "}
            </a>
          </button>
          <button className="import-bttn" onClick={() => searchProduct()}>
            Search
          </button>
        </div>
        {isLoading ? (
                    <h4 style={{ color: "black" }}>Please Wait Data is Loading...</h4>
                ) : null}
            </div>
        <div>
      </div>
    </div>
  );
}

export default ForPriceOnly;
