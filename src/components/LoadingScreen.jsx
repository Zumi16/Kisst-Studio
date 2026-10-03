import './LoadingScreen.css'
import { products } from '../data/loadingdata';
export function LoadingScreen() {
    return (
            <div className="page-body">
                <div className="pagination-actions">
                    <button className="prev-page" >Previous</button>
                    <p>Page 0 of 0</p>
                    <button className="next-page">Next</button>
                </div>

                <div className="product-grid">
                    {
                        products.map((product) => {
                            return (
                                <div className="product">
                                    {/* <p>Description: {product.description}</p> */}
                                    <div className="product-detail">
                                        <img src={product.thumbnail} />
                                        <h1>{product.title}</h1>
                                        <p>Category: {product.category}</p>
                                        <p>Rating: {product.rating}</p>
                                        <p>Price: ${product.price} </p>
                                        <p>Stock: {product.stock}</p>
                                    </div>
                                    <div className="product-action">
                                        <button className="addtocart-btn">Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="pagination-actions">
                    <button className="prev-page" >Previous</button>
                    <p>Page 0 of 0</p>
                    <button className="next-page">Next</button>
                </div>
            </div>
    )

}