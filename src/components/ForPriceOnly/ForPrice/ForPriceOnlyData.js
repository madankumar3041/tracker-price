import React, { useState } from 'react'
function ForPriceOnlyData(props) {
    debugger
    console.log(props)
    const [batchData, setBatchData] = useState({});
    const handleChange = (index) => {
        setBatchData(index);

    }
    console.log(batchData)
    var data = batchData.product_data;
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
            <div className="cards-Container">
                {
                    props?.location?.state?.map((item) =>

                        <div className="display-cards">
                            <h5>Products Name</h5>
                            <h5>{item[1].product_data?.amazon_data?.product_name || item[1].product_data?.jio_data?.product_name ||
                                item[1].product_data?.flipkart_data?.product_name ||
                                item[1].product_data?.bb_data?.product_name ||
                                item[1].product_data?.grofer_data?.product_name}</h5>
                            <button
                                className="btned color-a toped" onClick={() => handleChange(item[1])}>Show the Result</button>
                        </div>
                    )}
            </div>

            {batchData !== undefined ?
                <div>
                    <div
                        style={{
                            display: "flex"
                        }}>
                        <div className="table-content">
                            <h5>City and Pin Code : {batchData?.city_pincode}</h5>
                            <h5>Product Name : {data?.amazon_data?.product_name}</h5>
                            <h5>Company MRP :{batchData.comp_mrp}</h5>
                            <h5>Company offer price : {batchData.comp_offer_price}</h5>
                            <h5>Date and time: { props?.location?.time_date}</h5>
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
                                <td><tr>{data?.amazon_data?.product_name || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.product_name || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.product_name || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.product_name || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.product_name || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1">Sku code</td>
                                <td><tr>{data?.amazon_data?.product_sku_code || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.product_sku_code || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.product_sku_code || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.product_sku_code || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.product_sku_code || "N/A"}</tr></td>
                            </tr>
                        <tr>
                                <td rowspan="1"> MRP</td>
                                <td><tr>{data?.amazon_data?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.product_mrp || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1"> Price</td>
                                <td><tr>{data?.amazon_data?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.product_price || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1"> Availability</td>
                                <td><tr>{data?.amazon_data?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.availability_status || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1"> Delivary Estimation</td>
                                <td><tr>{data?.amazon_data?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.delivery_estimation || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1">Rating</td>
                                <td><tr>{data?.amazon_data?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.rating_value || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="1"> Rating Count</td>
                                <td><tr>{data?.amazon_data?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.rating_count || "N/A"}</tr></td>
                            </tr>
                        </tbody>
                    </table>
                </div> : <h1>No result</h1>
            }
        </div>
    )
}

export default ForPriceOnlyData
