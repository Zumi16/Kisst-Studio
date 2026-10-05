import { useState } from 'react';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartPanel from './CartPanel';

export function Header({ total, cart, setCart, categories, selectedCategories, setSelectedCategories, sortOptions, sortBy, setSortBy, maxPrice, setMaxPrice, search, setSearch, isInStock, setIsInStock, setCurrentPage, paginatedProducts, highestPrice}) {
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
        setCurrentPage(1);
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
                </div>
            </div>
            <div className='sub-header'>
                <div className='left-section'>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('category')}>{selectedCategories === "all" ? "Select Category" : selectedCategories}</button>
                        {openDropdown === 'category' && (
                            <ul className='dropdown-menu'>
                                {categories.map((category) => {
                                    return <li key={category} onClick={() => handleCategoryClick(category)}>{category}</li>
                                })}
                            </ul>
                        )}
                    </div>
                    <div className='dropdown-container'>
                        <button onClick={() => toggleDropdown('sort')}>{sortBy}</button>
                        {openDropdown === 'sort' && (
                            <ul className='dropdown-menu' >
                                {sortOptions.map((option) => {
                                    return <li key={option} onClick={() => handleSortClick(option)}>{option}</li>
                                })}
                            </ul>
                         )}
                    </div>
                    <div>
                        <div className='price-slider'>
                            <label>Max Price: ${maxPrice}</label>
                            <input
                                className='range-slider'
                                type='range' 
                                min='0' 
                                max={highestPrice}
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='in-stock-checkbox'>
                        <input type='checkbox' checked={isInStock} onChange={handleInStockClick}/>
                        <label>In stock only</label>
                    </div>
                    <button className='clear-all' onClick={handleClearFilter}>Clear all</button>
                </div>
                <div className='right-section'>
                    <input 
                        className='search-bar' 
                        placeholder='Search' 
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                    />
                </div>
            </div>
            <div className='result-header'>
                <p>Showing {paginatedProducts.length} out of {total} products.</p>
                <div className='filter-selected'>
                    {selectedCategories !== INITIAL_FILTERS.category && 
                    <div className='filter-tag'>
                        {selectedCategories}
                        <button onClick={() => setSelectedCategories(INITIAL_FILTERS.category)}>✕</button>
                    </div>}

                    { sortBy !== INITIAL_FILTERS.sortBy &&
                    <div className='filter-tag'>
                        {sortBy}
                        <button onClick={() => setSortBy(INITIAL_FILTERS.sortBy)}>✕</button>
                    </div> }

                    {maxPrice !== INITIAL_FILTERS.maxPrice &&
                    <div className='filter-tag'>
                        under ${maxPrice}
                        <button onClick={() => setMaxPrice(INITIAL_FILTERS.maxPrice)}>✕</button>
                    </div>
                    }
                </div>
            </div>

            <CartPanel isCartOpen={isCartOpen} cart={cart} setCart={setCart} onClose={() => setIsCartOpen(false)} />
        </header>
    )
}

export default Header;