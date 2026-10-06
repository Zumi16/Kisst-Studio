import { useState } from 'react';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartPanel from './CartPanel';

export function Header({ total, visibleCount, cart, setCart, categories, selectedCategories, setSelectedCategories, sortOptions, sortBy, setSortBy, maxPrice, setMaxPrice, search, setSearch, isInStock, setIsInStock, setCurrentPage, highestPrice, onClearFilters }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const INITIAL_FILTERS = {
        category: "all",
        sortBy: "featured",
    };

    function toggleDropdown(name) {
        setOpenDropdown(prev => prev === name ? null : name);
    }

    function handleCategoryClick(category) {
        setSelectedCategories(category);
        setCurrentPage(1);
        setOpenDropdown(null);
    }

    function handleSortClick(option) {
        setSortBy(option);
        setCurrentPage(1);
        setOpenDropdown(null);
    }

    function handleInStockClick(event) {
        setIsInStock(event.target.checked);
        setCurrentPage(1);
    }

    function handleMaxPriceChange(event) {
        setMaxPrice(Number(event.target.value));
        setCurrentPage(1);
    }

    return (
        <header>
            <div className="main-header">
                <div className='left-section'>
                    <img className='logo' src='images/logo-white.png' />
                </div>
                <button
                    className='right-section cart-trigger'
                    onClick={() => setIsCartOpen(true)}
                    aria-label={'Open cart with ' + cartCount + ' items'}
                >
                    <ShoppingCartOutlinedIcon fontSize='large' />
                    <span>Cart ({cartCount})</span>
                </button>
            </div>

            <div className='sub-header'>
                <div className='left-section'>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('category')}>
                            {selectedCategories === "all" ? "Select Category" : selectedCategories}
                        </button>
                        {openDropdown === 'category' && (
                            <ul className='dropdown-menu'>
                                {categories.map((category) => (
                                    <li key={category} onClick={() => handleCategoryClick(category)}>{category}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('sort')}>{sortBy}</button>
                        {openDropdown === 'sort' && (
                            <ul className='dropdown-menu'>
                                {sortOptions.map((option) => (
                                    <li key={option} onClick={() => handleSortClick(option)}>{option}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className='price-slider'>
                        <label>{'Max Price: $' + maxPrice}</label>
                        <input
                            className='range-slider'
                            type='range'
                            min='0'
                            max={highestPrice}
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>

                    <div className='in-stock-checkbox'>
                        <input type='checkbox' checked={isInStock} onChange={handleInStockClick} />
                        <label>In stock only</label>
                    </div>
                    <button className='clear-all' onClick={onClearFilters}>Clear all</button>
                </div>

                <div className='right-section'>
                    <input
                        className='search-bar'
                        placeholder='Search'
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            </div>

            <div className='result-header'>
                <p>Showing {visibleCount} of {total} products.</p>
                <div className='filter-selected'>
                    {search.trim() !== "" &&
                    <div className='filter-tag'>
                        Search: {search}
                        <button aria-label='Remove search filter' onClick={() => { setSearch(""); setCurrentPage(1); }}>×</button>
                    </div>}

                    {selectedCategories !== INITIAL_FILTERS.category &&
                    <div className='filter-tag'>
                        {selectedCategories}
                        <button aria-label='Remove category filter' onClick={() => { setSelectedCategories("all"); setCurrentPage(1); }}>×</button>
                    </div>}

                    {sortBy !== INITIAL_FILTERS.sortBy &&
                    <div className='filter-tag'>
                        {sortBy}
                        <button aria-label='Reset sorting' onClick={() => { setSortBy("featured"); setCurrentPage(1); }}>×</button>
                    </div>}

                    {maxPrice !== highestPrice &&
                    <div className='filter-tag'>
                        {'under $' + maxPrice}
                        <button aria-label='Remove price filter' onClick={() => { setMaxPrice(highestPrice); setCurrentPage(1); }}>×</button>
                    </div>}

                    {isInStock &&
                    <div className='filter-tag'>
                        In stock only
                        <button aria-label='Remove stock filter' onClick={() => { setIsInStock(false); setCurrentPage(1); }}>×</button>
                    </div>}
                </div>
            </div>

            <CartPanel
                isCartOpen={isCartOpen}
                cart={cart}
                setCart={setCart}
                onClose={() => setIsCartOpen(false)}
            />
        </header>
    )
}

export default Header;

