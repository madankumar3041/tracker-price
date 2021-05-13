import React from "react";
import "./Styles.css";
export default function SearchCard({ data }) {

  return (
    <div className="double-data">
      <td>
        {" "}
        {data?.url || ""}
        {data?.url ? <br /> : ""}
      </td>
      <br></br>

      <td> {data?.product_name || "N/A"}</td>

      <br></br>

      <td > {data?.product_mrp || "N/A"}</td>

      <br></br>
      <td > {data?.product_price || "N/A"}</td>

      <br></br>
      <td> {data?.availability_status || "N/A"}</td>

      <br></br>
      <td> {data?.delivery_estimation || "N/A"}</td>

      <br></br>

      <td> {data?.rating_value || "N/A"}</td>

      <br></br>
      <td> {data?.rating_count || "N/A"}</td>

      <br></br>
    </div>
  );
}
