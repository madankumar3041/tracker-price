import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Constant, { getAPI } from '../../Constant';
import Moment from 'react-moment';

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
function UserSearchHistory() {

    const [isLoading, setLoading] = useState(false);
    let [history, setHistory] = useState({});

    useEffect(() => {
        const fetchhistory = () => {
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
            setLoading(true);
            authAxios({
                "method": "GET",
                "url": Constant.getAPI() + `/priceprediction/price-ptc-history/`,
                "headers": {
                    "content-type": "application/json",
                },
            })
                .then((response) => {
                    debugger
                    setHistory(response?.data);
                    setLoading(false);
                    console.log(history)
                })
                .catch((error) => {

                })
        }
        fetchhistory();

    }, [])
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
            {isLoading ? (<h4>Please wait data is loading...</h4>) :

                history?.length ? (
                    <div style={{ width: "100%" }}>
                        {history?.map((item) =>

                            <div>
                                <div
                                    style={{
                                        display: "flex"
                                    }}>
                                    <div className="table-content">
                                        <h5>City and Pin Code : {item?.city_pincode}</h5>
                                        <h5>Company MRP :{item?.comp_mrp}</h5>
                                        <h5>Company offer price : {item?.comp_offer_price}</h5>
                                        <h5>Recommended Price : {item?.recommended_price}</h5>
                                        <h5>Date and time:{<Moment format="YYYY/MM/DD / hh:mm:ss">{item?.date_and_time}</Moment>}</h5>
                                        
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Amazon</th>
                                            <th>JioMart</th>
                                            <th>FlipKart</th>
                                            <th>Big Basket</th>
                                            <th>Grofers</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="1"> Product Name</td>
                                            <td><tr>{item?.amazon_data_product_name || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_product_name || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_product_name || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_product_name || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_product_name || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1">Sku</td>
                                            <td><tr>{item?.amazon_data_product_sku_code || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_product_sku_code || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_product_sku_code || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_product_sku_code || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_product_sku_code || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1"> MRP</td>
                                            <td><tr>{item?.amazon_data_product_mrp || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_product_mrp || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_product_mrp || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_product_mrp || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_product_mrp || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1"> Price</td>
                                            <td><tr>{item?.amazon_data_product_price || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_product_price || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_product_price || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_product_price || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_product_price || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1"> Availability</td>
                                            <td><tr>{item?.amazon_data_availability_status || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_availability_status || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_availability_status || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_availability_status || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_availability_status || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1"> Delivary Estimation</td>
                                            <td><tr>{item?.amazon_data_delivery_estimation || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_delivery_estimation || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_delivery_estimation || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_delivery_estimation || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_delivery_estimation || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1">Rating</td>
                                            <td><tr>{item?.amazon_data_rating_value || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_rating_value || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_rating_value || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_rating_value || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_rating_value || "N/A"}</tr></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="1"> Rating Count</td>
                                            <td><tr>{item?.amazon_data_rating_count || "N/A"}</tr></td>
                                            <td><tr>{item?.jio_data_rating_count || "N/A"}</tr></td>
                                            <td><tr>{item?.flipkart_data_rating_count || "N/A"}</tr></td>
                                            <td><tr>{item?.bb_data_rating_count || "N/A"}</tr></td>
                                            <td><tr>{item?.grofer_data_rating_count || "N/A"}</tr></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ) : (
                    <h4>No Search Result Found...</h4>
                )}

        </div>
    )
}

export default UserSearchHistory
