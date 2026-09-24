export function Product({ handleAddToCart, setSelected, addedProductId, paginatedProducts, finalPrice }) {

    return (
        paginatedProducts.map((product) => {
            return (
                <div className="product" key={product.id} onClick={() => setSelected(product)}>
                    {/* <p>Description: {product.description}</p> */}
                    <div className="product-detail">
                        <img src={product.thumbnail} />
                        <h1>{product.title}</h1>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Price: ${finalPrice(product).toFixed(2)} - ${product.price} </p>
                        <p>Stock: {product.stock}</p>
                    </div>
                    <div className="product-action">
                        {addedProductId === product.id && <p>Added to cart!</p>}
                        <button className="addtocart-btn" onClick={(e) => handleAddToCart(e, product, 1)}>Add to cart</button>
                    </div>
                </div>
            )
        })
    )
}

export default Product;