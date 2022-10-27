import React, { useEffect, useState } from 'react';
import Product from './Products.js';
import Feedback from './FeedbackComp';

import axios from 'axios';
import '../css/style.css'
import '../css/rating.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function ProductDetails() {
    const [productDetails, setProductDetails] = useState([]);
    const [feedbackDetails, setFeedbackDetails] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(response => setProductDetails(response.data))
            .catch(error => setError(error))
        axios.get('http://localhost:4000/feedbacks')
            .then(response => setFeedbackDetails(response.data))
            .catch(error => setError(error))
            console.log(feedbackDetails)
    }, []);
    return (<>
        <div className={"col-sm-8"}>
            {productDetails.map((productDetail) =>
                <Product {...productDetail} />
            )}
        </div>
        <div className={"col-sm-4"}>
            <Feedback {...feedbackDetails} />
        </div>
    </>)
}
export default ProductDetails;
