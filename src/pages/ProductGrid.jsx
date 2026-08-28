import Modal from "../components/Modal";

export function ProductGrid({ products, selectedId, setSelected }) {
    return (
        <div className="product-grid">
            {products.map((product) => {
                return (
                    <div className="product" key={product.id} onClick={() => setSelected(product)}>
                        <img src={product.thumbnail} />
                        <h1>{product.title}</h1>
                        {/* <p>Description: {product.description}</p> */}
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Price: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Add to cart</p>
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