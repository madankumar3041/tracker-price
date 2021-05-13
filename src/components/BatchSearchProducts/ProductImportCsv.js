import React, { useState } from 'react'
import './importproduct.css'
import { Link } from 'react-router-dom'
import Constant from '../../Constant';
import axios from 'axios'
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

function ProductImportCsv(props) {
    const [isLoading, setLoading] = useState(false);
    const [uploadFile, setUploadFile] = useState([])
    const [batchFile, setBatchFile] = useState([])

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
        formingData.append("csv_file", batchFile.selectedFile);
        setLoading(true);
        authAxios
            .post(Constant.getAPI() + "/priceprediction/v3/", formingData)
            .then((response) => {
                console.log("success:", response);
                setBatchFile(response?.data);
                debugger

                // var mappingitem = [];
                // mappingitem.push(response?.data?.data?.item0,
                //     response?.data?.data?.item1,
                //     response?.data?.data?.item2,
                //     response?.data?.data?.item3,
                //     response?.data?.data?.item4);
                props.history.push({ pathname: '/products-batch-search', state: Object.entries(response?.data.data) });
                setLoading(false);

            })
            .catch((error) => {
                console.log("Error", error?.response?.data?.message);
                alert(error?.response?.data?.message)
            });
    };
    const handleselectedFile = event => {
        setUploadFile({
            selectedFile: event?.target?.files[0]?.name

        });
        setBatchFile({

            selectedFile: event?.target?.files[0]
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
                    <h3>Batch Import Products</h3>
                </div>
                <div class="Main-csv-import">
                    <input type="file" id="file" class="uploading-csv" name="file" onChange={handleselectedFile} />
                    <label for="file">Select File</label>
                    <h5>{uploadFile.selectedFile}</h5>
                </div>
                <div className="btton">
                    <button className="import-bttn">
                        <a href="Products-Search.csv" download="Products-Search.csv">Sample Csv </a></button>

                    {/* {to='/products-batch-search'} */}
                    <button className="import-bttn"
                        onClick={() => searchProduct()}
                    >Search</button>
                    {/* <button className="import-bttn">Cancel</button> */}
                </div>
                {isLoading ? (
                    <h1 style={{ color: "black" }}>Please Wait Data is Loading...</h1>
                ) : null}
            </div>
        </div>
    )
}

export default ProductImportCsv
