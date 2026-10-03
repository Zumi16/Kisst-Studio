import './Product.css'

export function Product({ handleAddToCart, setSelected, addedProductId, paginatedProducts, finalPrice }) {
    const getStockStatus = (stock) => {
        if (stock === 0) return {name:'out-of-stock', label: 'Out of Stock'}
        if (stock <= 10) return {name: 'low-stock', label: 'Low stock'}
        return {name: 'in-stock', label: 'in-stock'}
    }

    return (
        paginatedProducts.map((product) => {
            const status = getStockStatus(product.stock);

            return (
                <div className="product" key={product.id} onClick={() => setSelected(product)}>
                    {/* <p>Description: {product.description}</p> */}
                    <div className="product-detail">
                        <img src={product.thumbnail} />
                        <h1>{product.title}</h1>
                        <h5>{product.brand || "No Brand"}</h5>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Reviews: {product.reviews.length}</p>
                        <div className='price-container'>
                            <p>Price: ${finalPrice(product).toFixed(2)}</p>
                            <p className='discount-percent'>{product.discountPercentage}%</p> - 
                            <s>${product.price}</s>
                        </div>
                        <p className={status.name}> 
                            Stock: {product.stock} ({status.label})
                        </p>
                    </div>
                    <div className="product-action">
                        {addedProductId === product.id && <p>Added to cart!</p>}
                        { product.stock > 0 
                            ? <button className="addtocart-btn" onClick={(e) => handleAddToCart(e, product, 1)}>Add to cart</button> 
                            : <button disabled={true} className="addtocart-btn">Sold out</button>
                        }
                    </div>
                </div>
            )
        })
    )
}

export default Product;