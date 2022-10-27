import React from 'react';
const ProductList = ({ products }) => {
    return (
        <div className="container">
            <h2 className="products">Products</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.productId} className="col-sm-4">
                        <div className="card mt-4">
                            <img src={`http://localhost:4000/${product.productImg}`} alt="Card cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.description}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductList