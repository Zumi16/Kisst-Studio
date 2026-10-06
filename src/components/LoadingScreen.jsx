import './LoadingScreen.css'

function SkeletonCard() {
    return (
        <div className="skeleton-card" aria-hidden="true">
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-brand"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
            <div className="skeleton skeleton-price"></div>
            <div className="skeleton skeleton-button"></div>
        </div>
    )
}

export function LoadingScreen() {
    return (
        <div className="product-grid" aria-busy="true" aria-label="Loading products">
            {Array.from({ length: 8 }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}

