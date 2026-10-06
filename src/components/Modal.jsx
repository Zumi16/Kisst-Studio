import { useEffect } from 'react';
import ProductDetail from '../pages/ProductDetail';
import './Modal.css'

import CloseIcon from '@mui/icons-material/Close';

export function Modal({ selectedId, setSelected, addedProductId, handleAddToCart }) {
    function handleClose() {
        setSelected(false);
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') setSelected(false);
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setSelected]);

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={handleClose}><CloseIcon fontSize='large'/></button>           
                <ProductDetail selectedId={selectedId} handleAddToCart={handleAddToCart} addedProductId={addedProductId}/>
            </div>
        </div>
    )
}

export default Modal;
