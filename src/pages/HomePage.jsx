import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
import { useState } from "react";

function HomePage({ products, total, selectedId, setSelected, categories, setSelectedCategories, visible, finalPrice, sortOptions, setSortBy, maxPrice, setMaxPrice, search, setSearch}) {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header 
                products={products} 
                total={total} 
                cart={cart} 
                setCart={setCart} 
                categories={categories} 
                setSelectedCategories={setSelectedCategories}
                sortOptions={sortOptions}
                setSortBy={setSortBy}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                search={search}
                setSearch={setSearch}
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