import './CartPanel.css'
import CloseIcon from '@mui/icons-material/Close';

export function CartPanel({ isCartOpen, onClose, cart, setCart }) {
    const cartCount = cart.reduce((n, currentItem) => n + currentItem.quantity, 0)
    const total = cart.reduce((s, currentItem) => s + currentItem.price * currentItem.quantity, 0)

    function handleIncrease(productId) {
        setCart(cartItem => {
            return cartItem.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
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

    function handleRemove(productId) {
        const userConfirmed = window.confirm("Are you sure you want to remove this item?")

        if (userConfirmed) {
            setCart(cartItem => {
                return cartItem.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity = 0 } : item
                )
                    .filter(item => item.quantity > 0);
            })
        }
    }

    function handleClearCart() {
        const userConfirmed = window.confirm("Are you sure you want to remove all items?")

        if (userConfirmed) {
            console.log("Cart cleared!")
            setCart([]);
        }
    }

    console.log(cart)
    return (
        <>
            <div className={`panel-backdrop ${isCartOpen ? 'open' : ''}`}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <button className='close-panel' onClick={onClose}><CloseIcon /></button>
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

                                        <div className='quantity-container'>
                                            <p>Item:</p>
                                            <button className='quantity-btn' onClick={() => handleDecrease(product.id)}>-</button>
                                            {product.quantity}
                                            <button className='quantity-btn' onClick={() => handleIncrease(product.id)}>+</button>
                                        </div>
                                    </div>
                                    <button className='remove-item' onClick={() => handleRemove(product.id)}>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='total-container'>
                        <div className='total-overall'>
                            <p>Subtotal (before discount) $33.97</p>
                            <p>You save -$1.69</p>
                            <p>Total {total}</p>
                        </div>
                        <div className='clear-container'>
                            <button onClick={() => handleClearCart()}>Clear cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel;