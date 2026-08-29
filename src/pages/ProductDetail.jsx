import { useState } from "react";

export function ProductDetail({ selectedId }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = selectedId.images.length - 1;

    const nextSlide = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    const previousSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }

    console.log(selectedId)
    return (
        <div className="product-detail" key={selectedId.id}>
            <div className="detail-head">
                {/* gawing component */}
                <div className="images-container">
                    <button className="next-btn" onClick={previousSlide}>Previous</button>
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
                    <button className="next-btn" onClick={nextSlide}>Next</button>
                </div>
                <h1>{selectedId.title}</h1>
                <p>Rating: {selectedId.rating} Reviews: {selectedId.reviews.length}</p>
            </div>
            <div className="detail-body">
                <p>{selectedId.description}</p>
                {/* Gagawing component --v */}
                <p>Tags: {selectedId.tags.join(", ")} </p>
                <p>Warranty: {selectedId.warrantyInformation}</p>
                <p>Shipping: {selectedId.shippingInformation.slice(6)}</p>
                <p>Returns: {selectedId.returnPolicy}</p>

                {selectedId.reviews.map((reviews) => {
                    console.log(reviews.rating)
                    return (
                        <div className="Reviews">
                            <p>Rating: {reviews.rating}</p>
                            <p>{reviews.reviewerName}</p>
                            <p>{reviews.date}</p>
                            <p>{reviews.comment}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductDetail