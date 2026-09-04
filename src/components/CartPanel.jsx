import './CartPanel.css'

export function CartPanel({ isCartOpen, onClose, cart, setCart }) {
    const cartCount = cart.reduce((n, currentItem) => n + currentItem.quantity, 0)
    const total = cart.reduce((s, currentItem) => s + currentItem.price * currentItem.quantity, 0)

    function handleIncrease(productId) {
        setCart(cartItem => {
            return cartItem.map((item) => 
                item.id === productId ? {...item, quantity: item.quantity + 1} : item
            );
        })
    }

    function handleDecrease(productId) {
        setCart(cartItem => {
            return cartItem.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
                .filter(item => item.quantity > 0);
        })
    }

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
                                    <img className='item-img' src={product.thumbnail} />
                                    <div className='item-detail'>
                                        <h3>{product.title}</h3>
                                        <p>Price: {product.price}</p>

                                        <p>item
                                            <button onClick={() => handleDecrease(product.id)}>Decrease</button>
                                            {product.quantity}
                                            <button onClick={() => handleIncrease(product.id)}>Increase</button>
                                            </p>
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