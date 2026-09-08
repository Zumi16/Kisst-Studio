import ProductDetail from '../pages/ProductDetail';
import './Modal.css'

import CloseIcon from '@mui/icons-material/Close';

export function Modal({ selectedId, setSelected, addedProductId, handleAddToCart }) {
    return (
        <div className="modal-overlay" onClick={() => setSelected(false)}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={() => setSelected(false)}><CloseIcon fontSize='large'/></button>           
                <ProductDetail selectedId={selectedId} handleAddToCart={handleAddToCart} addedProductId={addedProductId}/>
            </div>
        </div>
    )
}

export default Modal;