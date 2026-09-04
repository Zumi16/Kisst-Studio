import './CartPanel.css'

export function CartPanel({ isCartOpen, onClose, cart, setCart }) {
    const cartCount = cart.reduce((n, i) => n + i.quantity, 0)   
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0) 

    console.log(cart)
    return (
        <>
            <div className={`panel-backdrop ${isCartOpen ? 'open' : ''}`}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <button className='close-panel' onClick={onClose}>Close</button>
                    <h2>Your Cart ({cartCount} Items)</h2>
                </div>
                <div className='cart-body'>
                    <div className='cart-container'>
                        {/* Continue here */}
                        {cart.map((product) => {
                            return (
                                <div className='cart-item' key={product.id}>
                                    <img className='item-img' src={product.thumbnail}/>
                                    <div className='item-detail'>
                                        <h3>{product.title}</h3>
                                        <p>Price: {product.price}</p>
                                        <p>item - {product.quantity} +</p>
                                    </div>
                                    <button className='remove-item'>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='total-container'>
                        <p>Subtotal (before discount) $33.97</p>
                        <p>You save -$1.69</p>
                        <p>Total {total}</p>
                        <button>Clear cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel;