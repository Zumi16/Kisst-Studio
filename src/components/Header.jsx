import { useState } from 'react';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartPanel from './CartPanel';

export function Header({ products, total, cart, setCart, categories, setSelectedCategories, sortOptions, setSortBy, maxPrice, setMaxPrice, search, setSearch, isInStock, setIsInStock}) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const INITIAL_FILTERS = {
        search: "",
        category: "all",
        sortBy: "featured",
        maxPrice: 1000,
        isInStock: false,
    };

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

    function handleInStockClick(event) {
        setIsInStock(event.target.checked)
    }

    function handleClearFilter() {
        setSortBy(INITIAL_FILTERS.sortBy)
        setSearch(INITIAL_FILTERS.search);
        setSelectedCategories(INITIAL_FILTERS.category);
        setMaxPrice(INITIAL_FILTERS.maxPrice);
        setIsInStock(INITIAL_FILTERS.isInStock);
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
                                    return <li key={category} onClick={() => handleCategoryClick(category)}>{category}</li>
                                })}
                            </ul>
                        )}
                    </div>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('sort')}>Sort</button>
                        {openDropdown === 'sort' && (
                            <ul className='dropdown-menu' >
                                {sortOptions.map((option) => {
                                    return <li key={option} onClick={() => handleSortClick(option)}>{option}</li>
                                })}
                            </ul>
                         )}
                    </div>
                    <div>
                        <div>
                            <label>Max Price: ${maxPrice}</label>
                            <input 
                                type='range' 
                                min='0' 
                                max='2500'
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <input type='checkbox' checked={isInStock} onChange={handleInStockClick}/>
                        <label>In stock only</label>
                    </div>
                    <button onClick={handleClearFilter}>Clear all</button>
                </div>
                <div className='right-section'>
                    <input 
                        className='search-bar' 
                        placeholder='Search' 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
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