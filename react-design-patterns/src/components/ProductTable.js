import React from 'react';
const ProductTable = ({ products }) => {
    return (
        <div className="container">
            <h2 className="products">Products</h2>
            <table border="1" >
                {products.map(product => (
                    <tr key={product.productId} className="col-sm-4">

                        <td > <img src={`http://localhost:4000/${product.productImg}`} alt="Card cap"></img></td>

                        <td>   <h5 className="card-title">{product.productName}</h5></td>
                        <td>   <p className="card-text">{product.description}</p></td>
                        <td>  <button className="btn btn-primary">Add to Cart</button></td>


                    </tr>
                ))}
            </table>
        </div>
    )
}
export default ProductTable