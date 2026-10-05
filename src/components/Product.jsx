import './Product.css'

export function Product({ cart, handleAddToCart, setSelected, addedProductId, paginatedProducts, finalPrice }) {
    const getStockStatus = (stock) => {
        if (stock === 0) return { name: 'out-of-stock', label: 'Out of Stock' }
        if (stock <= 10) return { name: 'low-stock', label: 'Low stock' }
        return { name: 'in-stock', label: 'in-stock' }
    }

    return (
        paginatedProducts.map((product) => {
            const status = getStockStatus(product.stock);
            // si cartItem dito is hahanapin kung yung CURRENT product na nirrender ng map
            // ay existing na ba sa loob ng cart
            // pede mong iconsole log then lalabas ung mga items na naka add to cart na
            const cartItem = cart.find((item) => item.id === product.id)

            // si product.id naman ay nagbabago depende sa current product na niloloop ng paginatedProducts.map()
            // example:
            // Mascara = product.id 1
            // Lipstick = product.id 2
            // Perfume = product.id 3
            //
            // so bawat product card na ginagawa ng map, ichecheck niya separately sa cart
            // kung may item na same yung id

            // example kung current product is Mascara na may id = 1:
            // cart.find((item) => item.id === 1)
            //
            // kapag nakita niya yung id 1 sa cart, ibabalik ng .find() yung buong object
            // example:
            // cartItem = { id: 1, title: "Mascara", quantity: 2 }
            //
            // kaya pwede natin gamitin yung cartItem.quantity para malaman
            // kung ilan na yung quantity ng SPECIFIC product na yun sa cart

            // kapag naman wala yung product sa cart,
            // walang mahahanap si .find() kaya magiging undefined si cartItem
            // kaya dito chinecheck lang natin kung may laman/existing si cartItem
            // kapag existing siya, ipapakita yung quantity niya -> "In cart (2)"
            // kapag undefined siya, ibig sabihin wala pa yung product sa cart -> "Add to cart"
            
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
                        {product.stock > 0
                            ? <button className="addtocart-btn" onClick={(e) => handleAddToCart(e, product, 1)}>
                                {cartItem ? `In cart (${cartItem.quantity})` : "Add to cart"}
                            </button>
                            : <button disabled={true} className="addtocart-btn">Sold out</button>
                        }
                    </div>
                </div>
            )
        })
    )
}

export default Product;