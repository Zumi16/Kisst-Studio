import { useState } from "react";
import './ProductDetail.css'
import { getDiscountedPrice } from "../utils/format";

export function ProductDetail({ selectedId, handleAddToCart, addedProductId }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = selectedId.images.length - 1;
    const getStockStatus = selectedId.status === 0 ? "No Stock" : "In stock"
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 10;
    const discountedPrice = getDiscountedPrice(selectedId.price, selectedId.discountPercentage).toFixed(2)

    const nextSlide = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    const previousSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }

    const handleIncrement = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
        }
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="product-detail" key={selectedId.id}>
            <div className="detail-head">
                {/* gawing component not finished*/}
                <div className="images-container">
                    {currentIndex > 0 && <button className="prev-btn" onClick={previousSlide}> ❮ </button>}
                    <div className="images-window">
                        <div className="images-track" style={{ transform: `translateX(-${currentIndex * (100 / 1)}%)` }}>
                            {selectedId.images.map((image, index) => {
                                return (
                                    <div className="images-card" key={index}>
                                        <img src={image} alt={`Slide ${index}`} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {currentIndex < maxIndex && <button className="next-btn" onClick={nextSlide}> ❯ </button>}
                </div>
                <div className="product-info">
                    <h1>{selectedId.title}</h1>
                    <p>Rating: {selectedId.rating} ({selectedId.reviews.length} reviews)</p>
                    <p>${selectedId.price} - ${discountedPrice} %{Math.round(selectedId.discountPercentage)}</p>
                    <p>{getStockStatus} - {selectedId.stock} left!</p>
                </div>
            </div>
            <div className="detail-body">
                <div className="desc-body">
                    {/* To continue */}
                    <p>{selectedId.description}</p>
                    <div className="product-tags">
                        <p>Tags: </p>
                        {selectedId.tags.map((tag, index) => {
                            return (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <p>Warranty: {selectedId.warrantyInformation}</p>
                    <p>Shipping: {selectedId.shippingInformation.slice(6)}</p>
                    <p>Returns: {selectedId.returnPolicy}</p>

                </div>

                <div className="action-buttons">
                    <div className="quantity-picker">
                        <input className="quantity-input" type="number" value={quantity} readOnly />
                        <button className="quantity-btn" onClick={handleDecrement}>-</button>
                        <button className="quantity-btn" onClick={handleIncrement}>+</button>
                    </div>
                    {addedProductId === selectedId.id && <p className="added-to-cart"> Added to cart!</p>}
                    <button className="cart-btn" onClick={(e) => handleAddToCart(e, selectedId, quantity)}>Add to cart</button>
                </div>

                <div className="reviews-container">
                    {selectedId.reviews.map((reviews, index) => {
                        return (
                            <div className="reviews" key={index}>
                                <p>Rating: {reviews.rating}</p>
                                <p>{reviews.reviewerName}</p>
                                <p>{reviews.date}</p>
                                <p>{reviews.comment}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail