import { useState } from "react";
import Modal from "../components/Modal";
import './ProductGrid.css'
import { Product } from "../components/Product";

export function ProductGrid({ error, selectedId, setSelected, setCart, finalPrice, currentPage, setCurrentPage, totalPages, paginatedProducts }) {
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

    if (error) {
        return (
            <div className="error-container">
                <div className="message-container">
                    <h3>Oops! Something went wrong!</h3>
                    <p>{error}</p>
                </div>
                <button className="retry-btn" onClick={() => window.location.reload()}>Try again</button>
            </div>
        )
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
                    <Product
                        handleAddToCart={handleAddToCart}
                        setSelected={setSelected}
                        addedProductId={addedProductId}
                        paginatedProducts={paginatedProducts}
                        finalPrice={finalPrice}
                    />

                    {selectedId && (
                        <Modal
                            handleAddToCart={handleAddToCart}
                            selectedId={selectedId}
                            setSelected={setSelected}
                            addedProductId={addedProductId}
                        />
                    )}
                </div>) : <div className="empty-grid"><p>We couldn't find any items matching your search or filters.</p></div>}

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