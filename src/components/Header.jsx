import { useState } from 'react';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartPanel from './CartPanel';

export function Header({ products, total, cart, setCart, categories, setSelectedCategories, sortOptions, setSortBy}) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    //  name specifies dropdown name/type
    function toggleDropdown(name) { 
        setOpenDropdown(prev => prev === name ? null : name);
    };

    function handleCategoryClick(category) {
        setSelectedCategories(category);
        setOpenDropdown(null); 
    }

    function handleSortClick(option) {
        setSortBy(option)
        setOpenDropdown(null);
    }
    // continue dropdown reusable

    function openCartPanel() {
        setIsCartOpen(true);
    }

    return (
        <header>
            <div className="main-header">
                <div className='left-section'>
                    <img className='logo' src='images/logo-white.png' />
                </div>
                <div className='right-section' onClick={openCartPanel}>
                    <ShoppingCartOutlinedIcon fontSize='large' />
                    <p>Cart</p>
                </div>
            </div>
            <div className='sub-header'>
                <div className='left-section'>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('category')}>Category</button>
                        {openDropdown === 'category' && (
                            <ul className='dropdown-menu'>
                                {categories.map((category) => {
                                    return <li onClick={() => handleCategoryClick(category)}>{category}</li>
                                })}
                            </ul>
                        )}
                    </div>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('sort')}>Sort</button>
                        {openDropdown === 'sort' && (
                            <ul className='dropdown-menu' >
                                {sortOptions.map((option) => {
                                    return <li onClick={() => handleSortClick(option)}>{option}</li>
                                })}
                            </ul>
                         )}
                    </div>

                    <p>Price Slider</p>
                    <p>In stock only</p>
                    <p>Clear All</p>
                </div>
                <div className='right-section'>
                    <input className='search-bar' placeholder='Search' />
                </div>
            </div>
            <div className='result-header'>
                <p>Showing {products.length} out of {total} products.</p>
                <div className='category-selected'>
                    <p>Category 1</p>
                    <p>Category 2</p>
                </div>
            </div>

            <CartPanel isCartOpen={isCartOpen} cart={cart} setCart={setCart} onClose={() => setIsCartOpen(false)} />
        </header>
    )
}

export default Header;