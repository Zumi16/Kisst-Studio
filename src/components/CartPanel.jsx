import './CartPanel.css'
import { getDiscountedPrice } from '../utils/format';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export function CartPanel({ isCartOpen, onClose, cart, setCart }) {
    const cartCount = cart.reduce((n, currentItem) => n + currentItem.quantity, 0)
    const total = cart.reduce((s, currentItem) => s + currentItem.price * currentItem.quantity, 0)
    const finalDiscountedPrice = cart.reduce((sum, item) => {
        const itemSubtotal = item.price * item.quantity;
        return sum + getDiscountedPrice(itemSubtotal, item.discountPercentage);
    }, 0);

    const totalSaved = total - finalDiscountedPrice;

    function handleIncrease(productId) {
        setCart(cartItem => {
            return cartItem.map((item) =>
                item.id === productId && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
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
            setCart(cartItem => cartItem.filter(item => item.id !== productId))
        }
    }

    function handleClearCart() {
        const userConfirmed = window.confirm("Are you sure you want to remove all items?")

        if (userConfirmed) {
            console.log("Cart cleared!")
            setCart([]);
        }
    }

    return (
        <>
            <div className={`panel-backdrop ${isCartOpen ? 'open' : ''}`}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <button className='close-panel' onClick={onClose}>✕</button>
                    <h2>Your Shopping Cart ({cartCount} Items)</h2>
                </div>
                {cart.length === 0 ? (
                <div className='empty-cart'>
                    <p>Your cart is empty.</p>
                </div>
                ) : <>
                <div className='cart-body'>
                    <div className='cart-container'>
                        {cart.map((product) => {
                            return (
                                <div className='cart-item-container' key={product.id}>
                                    <div className='cart-item'>
                                        <img className='item-img' src={product.thumbnail} />
                                        <div className='item-detail'>
                                            <h3>{product.title}</h3>

                                            <div className='pricetoquantity-detail'>
                                                <p>${product.price}</p>
                                                <div className='quantity-container'>
                                                    <button className='cart-quantity-btn' onClick={() => handleDecrease(product.id)}>-</button>
                                                    <div className='quantity-box'>{product.quantity}</div>
                                                    <button className='cart-quantity-btn' disabled={product.quantity >= product.stock} onClick={() => handleIncrease(product.id)}>+</button>
                                                </div>
                                                <p>${product.price * product.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='remove-item' onClick={() => handleRemove(product.id)}><DeleteForeverIcon fontSize='large' /></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='total-container'>
                    <div className='total-overall'>
                        <label>Subtotal (before discount): <p className='before-discount'>${total}</p></label>
                        <label>You save <p className='total-saved'>${totalSaved.toFixed(2)}</p></label>
                        <label>Total <p className='total-price'>${finalDiscountedPrice.toFixed(2)}</p></label>
                    </div>
                    <div className='clear-container'>
                        <button onClick={() => handleClearCart()}>Clear cart</button>
                    </div>
                </div>
                </>}
            </div>
        </>
    )
}

export default CartPanel;
