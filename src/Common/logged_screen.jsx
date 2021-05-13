import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AddProduct } from "../components/addProducts/add_product";
import "./logged_screen.css";

export function LoggedScreen() {
  return (
    <div>
      <AddProduct />
    </div>
  );
}
