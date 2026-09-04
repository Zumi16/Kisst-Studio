import Modal from "../components/Modal";

export function ProductGrid({ products, selectedId, setSelected, setCart}) {

    // Continue Cart
    function handleAddToCart (e, cartProduct) {
        e.stopPropagation();

        setCart(cartItem => {
            return [...cartItem, {...cartProduct, quantity: 1}]
        })
    }

    return (
        <div className="product-grid">
            {products.map((product) => {
                return (
                    <div className="product" key={product.id} onClick={() => setSelected(product)}>
                        {/* <p>Description: {product.description}</p> */}
                        <div className="product-detail">
                            <img src={product.thumbnail} />
                            <h1>{product.title}</h1>
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Price: {product.price}</p>
                            <p>Stock: {product.stock}</p>
                        </div>
                        <button className="addtocart-btn" onClick={(e) => handleAddToCart(e, product)}>Add to cart</button>
                    </div>
                )
            })}

            {selectedId && (
                <Modal
                    selectedId={selectedId}
                    setSelected={setSelected}
                />
            )}
        </div>
    )
}

export default ProductGrid;