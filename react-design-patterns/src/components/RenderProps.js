import { useState, useEffect } from 'react';
import axios from 'axios';
function ProductData(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/products').then(res => {
            setProducts(res.data);
        })
    }, [])



    return props.render({ products: products })

}
export default ProductData;