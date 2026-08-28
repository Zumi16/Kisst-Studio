import ProductDetail from '../pages/ProductDetail';
import './Modal.css'

export function Modal({ selectedId, setSelected }) {
    return (
        <div className="modal-overlay" onClick={() => setSelected(false)}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>           
                <ProductDetail selectedId={selectedId}/>
            </div>
        </div>
    )
}

export default Modal;