import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";
import Cookies from "js-cookie";
import Constant from "../../Constant";
export function Login(props) {
  const location = useLocation();
  const [login, setLogin] = useState({});
  const Loggin = () => {
    // const loginData = new FormData();
    // loginData.append("email_or_username", login.email_or_username);
    // loginData.append("password", login.password);
    debugger;
    const data = {
      email_or_username: login.email_or_username,
      password: login.password,
    };
    axios
      .post(Constant.getAPI() + "/api/v1/user/login/", data)
      .then((response) => {
        debugger;
        console.log("success:", response);
        setLogin(response.data);
        const str = response.data.data.tokens;

        var jsonData = str.replace(/'/g, '"');

        const tokens = JSON.parse(jsonData);

        localStorage.setItem("username", response?.data?.data?.username);
        localStorage.setItem("refreshToken", tokens.refresh);
        localStorage.setItem("accessToken", tokens.access);
        localStorage.setItem("user_type", response?.data?.data?.user_type);
        Cookies.set("PriceAuth", true);
        Cookies.set("user_type", response?.data?.user_type);
        props.history.push("/logged-into-product");
      })
      .catch((error) => {
        console.log("Error", error?.response?.data?.message);
        alert(error?.response?.data?.message?.email_or_username[0]);
      });
  };
  const handleChange = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="Main-login">
      <div className="log-nav">
        <div className="log-nav-mid">
          <ul>
            <li>
              <a href="#">
                <h4>Price Tracker and Recommendation Tool</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-vox">
        <p class="signed" align="center">
          Login
        </p>
        <form class="form2">
          <input
            class="an"
            type="text"
            name="email_or_username"
            placeholder="email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
             placeholder="password"
            class="an"
            required
            onChange={handleChange}
          />
          <a
            class="submited"
            type="submit"
            onClick={() => Loggin()}
            align="center"
          >
            Login
          </a>
          <p class="forgoted" align="center">
            <a href="#"> Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
