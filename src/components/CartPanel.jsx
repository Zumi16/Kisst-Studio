import './CartPanel.css'

export function CartPanel({ isCartOpen, onClose }) {
    return (
        <>
            <div className={`panel-backdrop ${isCartOpen ? 'open' : ''}`}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <button className='close-panel' onClick={onClose}>Close</button>
                    <h2>Your Cart (3 Items)</h2>
                </div>
                <div className='cart-body'>
                    <div className='cart-container'>
                        {/* Continue here */}
                        {/* Cart items sample */}
                        <div className='cart-item'>
                            <div className='sample-img'>sample image</div>
                            <div className='item-detail'>
                                <h3>Item Titlefggggggggggg</h3>
                                <p>Price $9.28</p>
                                <p>item - 1 +</p>
                            </div>
                            <button className='remove-item'>Remove</button>
                        </div>
                        <div className='cart-item'>
                            <div className='sample-img'>sample image</div>
                            <div className='item-detail'>
                                <h3>Item Titlefggggggggggg</h3>
                                <p>Price $9.28</p>
                                <p>item - 1 +</p>
                            </div>
                            <button className='remove-item'>Remove</button>
                        </div>
                    </div>
                    <div className='total-container'>
                        <p>Subtotal (before discount) $33.97</p>
                        <p>You save -$1.69</p>
                        <p>Total $32.28</p>
                        <button>Clear cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel;