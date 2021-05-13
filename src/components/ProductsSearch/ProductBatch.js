import React, { useState } from 'react'
import './ProductBatch.css'
function ProductBatch(props) {
    debugger
    console.log(props)
    const [batchData, setBatchData] = useState({});
    const handleChange = (index) => {
        // var dataproduct =[];
        //  dataproduct.push(index)
        setBatchData(index);

    }
    console.log(batchData)
    var data = batchData.product_data;
    var data1 = batchData.competitor_data;
    var data2 = batchData.competitor2_data;

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
                            <h5>{item[1].product_data?.amazon_data?.products?.product_name || item[1].product_data?.jio_data?.products?.product_name ||
                                item[1].product_data?.flipkart_data?.products?.product_name ||
                                item[1].product_data?.bb_data?.products?.product_name ||
                                item[1].product_data?.grofer_data?.products?.product_name}</h5>
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
                            <h5>Product Name : {data?.amazon_data?.products?.product_name}</h5>
                            <h5>Company MRP :{batchData.comp_mrp}</h5>
                            <h5>Company offer price : {batchData.comp_offer_price}</h5>

                        </div>
                        <div className="table-content">

                            <h5>Competitor Name: {data1?.amazon_data?.products?.product_name ||
                                data1?.jio_data?.products?.product_name
                                || data1?.flipkart_data?.products?.product_name
                                || data1?.bb_data?.products?.product_name
                                || data1?.grofer_data?.products?.product_name}</h5>
                            <div className="comp-data">
                                <h5>Product Data :</h5> <div className="colo"></div>
                            </div>
                            <div className="comp-data">
                                <h5>Competitor 1 Data :</h5> <div className="colo1"></div>
                            </div>
                            <div className="comp-data">
                                <h5>Competitor 2 Data :</h5> <div className="colo2"></div>
                            </div>
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
                                <td rowspan="3"> MRP</td>
                                <td><tr>{data?.amazon_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.product_mrp || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.product_mrp || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.product_mrp || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.product_mrp || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowSpan="3">Offer Price</td>
                                <td><tr>{data?.amazon_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.product_price || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.product_price || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.product_price || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.product_price || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="3">Availability</td>
                                <td><tr>{data?.amazon_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.availability_status || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.availability_status || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.availability_status || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.availability_status || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="3">Estimate Delivery Days/Date</td>
                                <td><tr>{data?.amazon_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.delivery_estimation || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.delivery_estimation || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.delivery_estimation || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.delivery_estimation || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="3">Delivery Charges</td>
                                <td><tr>{data?.amazon_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.delivery_charge || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.delivery_charge || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.delivery_charge || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.delivery_charge || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="3">Ratings</td>
                                <td><tr>{data?.amazon_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.rating_value || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.rating_value || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.rating_value || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.rating_value || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td rowspan="3">Reviews Count</td>
                                <td><tr>{data?.amazon_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.jio_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.flipkart_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.bb_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data?.grofer_data?.products?.rating_count || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data1?.amazon_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data1?.jio_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data1?.flipkart_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data1?.bb_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data1?.grofer_data?.products?.rating_count || "N/A"}</tr></td>
                            </tr>
                            <tr>
                                <td><tr>{data2?.amazon_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data2?.jio_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data2?.flipkart_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data2?.bb_data?.products?.rating_count || "N/A"}</tr></td>
                                <td><tr>{data2?.grofer_data?.products?.rating_count || "N/A"}</tr></td>
                            </tr>
                        </tbody>
                    </table>
                </div> : <h1>No result</h1>
            }
        </div>
    )
}

export default ProductBatch
