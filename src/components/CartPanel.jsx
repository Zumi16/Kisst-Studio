import './CartPanel.css'

export function CartPanel({ isCartOpen, onClose }) {
    return (
        <>
        <div className={`panel-backdrop ${isCartOpen ? 'open' : ''}`}></div>
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <button className='close-panel' onClick={onClose}>Close</button>
                    <h1>What Is this</h1>
                </div>
            </div>
        </>
    )
}

export default CartPanel;