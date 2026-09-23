import { useState } from "react";
import Modal from "../components/Modal";
import './ProductGrid.css'

export function ProductGrid({ selectedId, setSelected, setCart, finalPrice, currentPage, setCurrentPage, totalPages, paginatedProducts }) {
    const [addedProductId, setAddedProductId] = useState(null)

    //Review this kung pano naseselect yung specific na product sobrang nakakalito!
    // ===
    function handleAddToCart(e, cartProduct, quantity) {
        e.stopPropagation();

        // si cartItem is kinukuha ung current na laman ng cart state
        setCart(cartItem => {
            const isExisting = cartItem.find((item) => item.id === cartProduct.id);
            // and then dito hahanapin nya sa mga laman ng state kung may item/product ba sa loob neto na same id
            // sa cartProduct.id na nakukuha mo galing sa button 
            // and pag meron naging similar masasave sya inside the isExisting variable

            // ngayon dito ichecheck if existing ang item ang mangyayari is
            // sa return hahanapin ulit ung specific na item na un by comparing the item inside the cartItem 
            // sa selected na product and if true yun madadgadagan lang yung quantity and if hindi ibabalik lang yung item
            // basically magtatake effect lang to sa mga added items na and pag dumaan sa items na hindi similar id is 
            // ibabalik lang yung item na yun pag inalis to, madagdagan ung isang item and yung ibang item mawawala kasi MAGIGING FALSE/UNDEFINED
            if (isExisting) {
                return cartItem.map((item) =>
                    item.id === cartProduct.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...cartItem, { ...cartProduct, quantity: quantity }]
        })

        setAddedProductId(cartProduct.id)

        setTimeout(() => {
            setAddedProductId(null);
        }, 3000);
    }

    return (
        <div className="page-body">
            {totalPages >= 1 && (
                <div className="pagination-actions">
                    <button className="prev-page" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
                    <p>Page {currentPage} of {totalPages}</p>
                    <button className="next-page" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
                </div>
            )}

            {paginatedProducts.length > 0 ? (
            <div className="product-grid">
                {paginatedProducts.map((product) => {
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
                }

                {selectedId && (
                    <Modal
                        handleAddToCart={handleAddToCart}
                        selectedId={selectedId}
                        setSelected={setSelected}
                        addedProductId={addedProductId}
                    />
                )}
            </div>) : <div className="empty-grid"><p>There are no items.</p></div>}

            {totalPages >= 1 && (
                <div className="pagination-actions">
                    <button className="prev-page" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
                    <p>Page {currentPage} of {totalPages}</p>
                    <button className="next-page" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
                </div>
            )}
        </div>
    )
}

export default ProductGrid;