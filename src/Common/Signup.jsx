import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Cookies from "js-cookie";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import Constant from "../Constant";

// const refreshToken = localStorage.getItem("refreshToken");

// const refreshAuthLogic = (failedRequest) =>
//   axios
//     .post("https://marketrate.infoware.xyz/api/v1/auth/token/refresh")
//     .then((tokenRefreshResponse) => {
//       localStorage.setItem("token", tokenRefreshResponse.data.token);
//       failedRequest.response.config.headers["Authorization"] =
//         "Bearer " + tokenRefreshResponse.data.token;
//       return Promise.resolve();
//     });
// createAuthRefreshInterceptor(axios, refreshAuthLogic);

export function Signup(props) {
  const [register, setRegister] = useState({});
  debugger;

  const Register = () => {
    debugger;
    const registerData = {
      firstname: register.firstname,
      lastname: register.lastname,
      username: register.username,
      email: register.email,
      company_name: register.company_name,
      user_account: register.user_account,
      user_type: register.user_type,
      password: register.password,
      password_confirmation: register.password_confirmation,
    };

    debugger;
    axios
      .post(Constant.getAPI() + "/api/v1/user/register/", registerData)
      .then((response) => {
        console.log("success:", response);
        setRegister(response.data.data);
        debugger;
        localStorage.setItem("username", response?.data?.data?.username);
        localStorage.setItem(
          "accessToken",
          response?.data?.data?.tokens?.access
        );
        localStorage.setItem(
          "refreshToken",
          response?.data?.data?.tokens?.refresh
        );
        props.history.push("/login");
      })
      .catch((error) => {
        console.log("Error", error?.response?.data?.message);
        alert(
          error?.response?.data?.message?.email_or_username ||
            error?.response?.data?.message?.username ||
            error?.response?.data?.message?.email
        );
      });
  };
  const handleChange = (event) => {
    setRegister((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="signupBox">
      <div className="signnav">
        <div className="navSignlinks">
          <ul>
            <li>
              <a href="#">
                <h4>Price Tracker and Recommendation Tool</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1">
          <input
            class="un"
            type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={handleChange}
          />
          <input
            class="un"
            type="text"
            name="Lastname"
            onChange={handleChange}
            placeholder="lastname"
          />
          <input
            class="un"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            class="un"
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <input
            class="un"
            type="text"
            name="company_name"
            placeholder="Company Name"
            onChange={handleChange}
          />
          <select
            class="un"
            type="text"
            name="user_account"
            placeholder="User Account"
            onChange={handleChange}
          >
            <option value="Basic">Basic</option>
            <option Value ="Plus">Plus</option>
            <option value="Premium">Premium</option>
          </select>
          <select
            class="un"
            type="text"
            name="user_type"
            onChange={handleChange}
          >
            <option value="Company">Company</option>
            <option value="Personal">Personal</option>
          </select>
          <input
            class="un"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            class="un"
            type="password"
            placeholder="Password Confirmation"
            name="password_confirmation"
            onChange={handleChange}
          />
          <div>
            <a
              class="submiting"
              onClick={() => Register()}
              type="submit"
              align="center"
            >
              Sign in
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
