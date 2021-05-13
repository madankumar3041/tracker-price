import React, { useState, useEffect } from "react";
import SearchCard from "./SearchCard/searchCard";
import "../addProducts/SearchCard/Styles.css";
import axios from "axios";
import data from "../data.json";
import Constant from "../../Constant";
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

export function AddProduct() {
  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [formData, setData] = useState({});
  const [headerData, setHeaderData] = useState({
    product_name: "Product Name",
    product_mrp: "Price (MRP)",
    product_price: "Product Price",
    availability_status: "Stock",
    delivery_estimation: "Delivery Estimated Days",
    rating_value: "Ratings",
    rating_count: "Rating count",
  });
  useEffect(() => {
    if (window.location.href.includes("admin")) {
      setHeaderData((prevState) => ({ ...prevState, url: "Url" }));
    }
  }, []);

  const downloadcsvfile = () => {
    var link = Constant.getAPI() + "/priceprediction/getcsv";
    window.location.href = link;
  };
  const searchProduct = (download = false) => {
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
    formingData.append("grofer_id", formData.groferId);
    formingData.append("pincode", formData.pincode);
    formingData.append("city", formData.city);
    formingData.append("product_sku", formData.productsku);
    formingData.append("productCop", formData.companyprice);
    formingData.append("productMrp", formData.mrpprice);
    formingData.append("ean_id", formData.EanId);
    formingData.append("asin", formData.Asin);
    formingData.append("productName", formData.name);
    formingData.append("jiomart_id", formData.JioId);
    formingData.append("fsn_id", formData.FlipkartFSN);
    setLoading(true);
    authAxios
      .post(Constant.getAPI() + "/priceprediction/v2/", formingData)
      .then((data) => {
        debugger;
        console.log("Success:", data);
        setResponseData(data?.data);
     
        if (download) {
          downloadcsvfile();
        }
        setLoading(false);
      })
      .catch((err) => {
        debugger;
        let data = err?.response?.data;
        if (err?.response?.status === 400) {
          
          alert(data?.message);
        }
        else alert(data?.detail)
      });
  };
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleDDChange = (event) => {
    debugger;
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    const filteredData = data.filter((item) => item.name == event.target.value);

    setData(filteredData[0]);
  };
  return (
    <div className="mainaddproduct">
      <div className="nav-bars">
        <div className="nav-linking">
          <ul>
            <li>
              <a href="#/logged-into-product">
                <h4>Price Tracker and Recommendation Tool</h4>
              </a>
            </li>
            <li>
              <a>
                {" "}
                <h4>My Account</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body-div-content">
        <div class="wrapper">
          <form class="form_class" onSubmit={(e) => e.preventDefault()}>
            <div class="form_field">
              <label class="form__label">Product Name</label>
              <input
                class="child-input"
                type="text"
                name="name"
                placeholder="Enter product Name"
                onChange={handleChange}
              />
              {/* <select
                          custom
                          name="name"
                          id="select"
                          onChange={handleDDChange}
                        >
                          <option value="Fortune Refined Sunflower Oil 1 Ltr Pouch">
                            Fortune Refined Sunflower Oil 1 Ltr Pouch
                          </option>
                          <option value="Fortune Refined Cottonseed Oil 5 Ltr Jar">
                            Fortune Refined Cottonseed Oil 5 Ltr Jar
                          </option>
                          <option value="Fortune Rozana Basmati Rice 5 kg">
                            Fortune Rozana Basmati Rice 5 kg{" "}
                          </option>
                          <option value="Fortune Atta 10 Kg">
                            Fortune Atta 10 Kg
                          </option>
                          <option value="Fortune Chana Besan 500 gm">
                            Fortune Chana Besan 500 gm{" "}
                          </option>
                          <option value="Fortune Gujarati superfood khichdi 200 gm">
                            Fortune Gujarati superfood khichdi 200 gm
                          </option>
                        </select> */}
            </div>
            <div class="form_field">
              <label> Product Code</label>
              <input
                className="child-input"
                type="text"
                name="code"
                placeholder="Enter product code"
              />
            </div>
            <div class="form_field">
              <label> Product Sku</label>
              <input
                className="child-input"
                type="text"
                name="productsku"
                placeholder="Enter product sku"
                // value={formData.productsku}
                onChange={handleChange}
              />
            </div>
            <div class="form_field">
              <label>EAN No</label>
              <input
                className="child-input"
                label="EAN No"
                type="text"
                name="EanId"
                placeholder="Enter EAN number"
                // value={formData.EanId}
                onChange={handleChange}
              />
              <label>ASIN no</label>
              <input
                className="child-input"
                label="ASIN No"
                placeholder="Enter ASIN number"
                type="text"
                name="Asin"
                onChange={handleChange}
                // value={formData.Asin}
              />
            </div>
            <div class="form_field">
              <label>Grofers Id</label>
              <input
                className="child-input"
                type="text"
                name="groferId"
                placeholder="Enter Grofer Id"
                onChange={handleChange}
                // value={formData.groferId}
              />
            </div>
            <div class="form_field">
              <label>Jio Id</label>
              <input
                className="child-input"
                type="text"
                name="JioId"
                placeholder="Enter Jio Id"
                onChange={handleChange}
                // value={formData.JioId}
              />
            </div>
            <div class="form_field">
              <label>Flipkart FSN No</label>
              <input
                className="child-input"
                type="text"
                name="FlipkartFSN"
                placeholder="Enter flipkart FSN No"
                onChange={handleChange}
                // value={formData.FlipkartFSN}
              />
            </div>
            {/* <div class="field">
                        <label>Brand</label>
                        <input
                          type="text"
                          name="code"
                          placeholder="Enter brand"
                        />
                      </div> */}
            <div class="form_field">
              <label>Company Offer Price (₹)</label>
              <input
                className="child-input"
                type="number"
                name="companyprice"
                placeholder="Enter company offer price"
                // value={formData.companyprice}
                onChange={handleChange}
              />
            </div>
            <div class="form_field">
              <label>MRP(₹)</label>
              <input
                className="child-input"
                placeholder="Enter MRP"
                type="number"
                name="mrpprice"
                // value={formData.mrpprice}
                onChange={handleChange}
              />
            </div>
            <div class="form_field">
              <label>City</label>
              <input
                className="child-input"
                type="text"
                name="city"
                placeholder="Enter city"
                // value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div class="form_field">
              <label>Pincode</label>
              <input
                className="child-input"
                type="number"
                name="pincode"
                placeholder="Enter pincode"
                // value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "0.5rem",
              }}
            >
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>Amazon</label>
              </div>
              {/* <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Flipkart</label></div> */}
              <div class=" ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>Jiomart</label>
              </div>
              <div class=" ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>Grofers</label>
              </div>
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>BigBasket</label>
              </div>
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>Flipkart</label>
              </div>
            </div>
            <button
              class="ui primary button"
              style={{ marginBottom: "1rem" }}
              onClick={() => searchProduct()}
            >
              Start Search{" "}
              <i
                style={{ marginLeft: "1rem" }}
                aria-hidden="true"
                className="search icon"
              ></i>
            </button>
            <button
              class="ui primary button"
              style={{ marginBottom: "1rem" }}
              onClick={() => searchProduct(true)}
            >
              Search/Download{" "}
              <i
                style={{ marginLeft: "1rem" }}
                aria-hidden="true"
                className="search icon"
              ></i>
            </button>
            <div class="three blue ui buttons">
              <button class="ui button">
                <i aria-hidden="true" className="add icon"></i>
                Add Single Product
              </button>
              <button class="ui button">
                <i aria-hidden="true" className="list icon"></i>
                Batch Import
              </button>
              <button class="ui button">
                <i aria-hidden="true" className="edit icon"></i>
                Manage
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading ? (
        <h1 style={{ color: "white" }}>Please Wait Data is Loading...</h1>
      ) : // <Loader />
      responseData?.data?.amazon_data?.products ||
        responseData?.data?.bb_data?.products ||
        responseData?.data?.grofer_data?.products ||
        responseData?.data?.jio_data?.products ||
        responseData?.data?.flipkart_data?.products ? (
        <div class="row">
          <table class="content-table">
            <thead class="thead-light">
              <tr className="file-data">
                <th scope="col">#</th>
                <th scope="col">Amazon</th>
                {/* <th scope="col">Flipkart</th> */}
                <th scope="col">BigBasket</th>
                <th scope="col">Jio Mart</th>
                <th scope="col">Grofers</th>
                <th scope="col">Flipkart</th>
                <th scope="col">Company Online </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">
                  <SearchCard data={headerData} />
                </td>
                <td className="">
                  {responseData?.data?.amazon_data ? (
                    <SearchCard
                      data={responseData?.data?.amazon_data?.products}
                    />
                  ) : null}
                </td>
                {/* <td className="">{responseData?.data?.flipkart_data ? <SearchCard data={responseData?.data?.flipkart_data?.products} /> : null}</td> */}
                <td className="">
                  {responseData?.data?.bb_data ? (
                    <SearchCard data={responseData?.data?.bb_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.jio_data ? (
                    <SearchCard data={responseData?.data?.jio_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.grofer_data ? (
                    <SearchCard
                      data={responseData?.data?.grofer_data?.products}
                    />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.flipkart_data ? (
                    <SearchCard
                      data={responseData?.data?.flipkart_data?.products}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-dash">
            Recommended price(Lowest Price) = Rs{" "}
            {responseData?.recommended_price}
          </div>
        </div>
      ) : (
        <h1 style={{ color: "white" }}>No Search Result Found...</h1>
      )}
    </div>
  );
}
