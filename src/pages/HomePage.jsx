import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
import { useState } from "react";

function HomePage({ products, total, selectedId, setSelected, categories, selectedCategories, setSelectedCategories, visible, finalPrice, sortOptions, sortBy, setSortBy, maxPrice, setMaxPrice, search, setSearch, isInStock, setIsInStock}) {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header 
                products={products} 
                total={total} 
                cart={cart} 
                setCart={setCart} 
                categories={categories} 
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                sortOptions={sortOptions}
                sortBy={sortBy}
                setSortBy={setSortBy}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                search={search}
                setSearch={setSearch}
                isInStock={isInStock}
                setIsInStock={setIsInStock}
            />

            <div className="home-page">
                <ProductGrid
                    selectedId={selectedId}
                    setSelected={setSelected}
                    setCart={setCart}
                    visible={visible}
                    finalPrice={finalPrice}
                />
            </div>
        </>
    )
}
export default HomePage;