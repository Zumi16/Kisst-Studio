import './LoadingScreen.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { products } from '../data/loadingdata';
export function LoadingScreen() {
    return (
        <div className='loading-container'>
            <header>
                <div className="main-header">
                    <div className='left-section'>
                        <img className='logo' src='images/logo-white.png' />
                    </div>
                    <div className='right-section' >
                        <ShoppingCartOutlinedIcon fontSize='large' />
                    </div>
                </div>
                <div className='sub-header'>
                    <div className='left-section'>
                        <div className='dropdown-container'>
                            <button >Select Category</button>
                        </div>
                        <div className='dropdown-container'>
                            <button >featured</button>
                        </div>
                        <div>
                            <div className='price-slider'>
                                <label>Max Price: $1000</label>
                                <input
                                    className='range-slider'
                                    type='range'
                                    min='0'
                                    max='2500'
                                />
                            </div>
                        </div>
                        <div className='in-stock-checkbox'>
                            <input type='checkbox' />
                            <label>In stock only</label>
                        </div>
                        <button className='clear-all'>Clear all</button>
                    </div>
                    <div className='right-section'>
                        <input
                            className='search-bar'
                            placeholder='Search'
                        />
                    </div>
                </div>
                <div className='result-header'>
                    <p>Showing 0 out of 0 products.</p>
                </div>

            </header>

            <main className='home-page'>
                <div className="page-body">
                    <div className="pagination-actions">
                        <button className="prev-page" >Previous</button>
                        <p>Page 0 of 0</p>
                        <button className="next-page">Next</button>
                    </div>

                    <div className="product-grid">
                            {
                                products.map((product) => {
                                    return (
                                        <div className="product">
                                            {/* <p>Description: {product.description}</p> */}
                                            <div className="product-detail">
                                                <img src={product.thumbnail} />
                                                <h1>{product.title}</h1>
                                                <p>Category: {product.category}</p>
                                                <p>Rating: {product.rating}</p>
                                                <p>Price: ${product.price} </p>
                                                <p>Stock: {product.stock}</p>
                                            </div>
                                            <div className="product-action">
                                                <button className="addtocart-btn">Add to cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>

                    <div className="pagination-actions">
                        <button className="prev-page" >Previous</button>
                        <p>Page 0 of 0</p>
                        <button className="next-page">Next</button>
                    </div>

                </div>
            </main>
        </div>
    )

}