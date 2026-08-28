import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export function Header({ products, total }) {

    return (
        <header>
            <div className="main-header">
                <div className='left-section'>
                    <img className='logo' src='images/logo-white.png' />
                </div>
                <div className='right-section'>
                    <ShoppingCartOutlinedIcon fontSize='large' />
                    <p>Cart</p>
                </div>
            </div>
            <div className='sub-header'>
                <div className='left-section'>
                    <p>All Categories Dropdown</p>
                    <p>Featured/Sort Dropdown</p>
                    <p>Price Slider</p>
                    <p>In stock only</p>
                    <p>Clear All</p>
                </div>
                <div className='right-section'>
                    <input className='search-bar' placeholder='Search'/>
                </div>
            </div>
            <div className='result-header'>
                <p>Showing {products.length} out of {total} products.</p>
                <div className='category-selected'>
                    <p>Category 1</p>
                    <p>Category 2</p>
                </div>
            </div>
        </header>
    )
}

export default Header;