import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
import { useState } from "react";

function HomePage({ loading, error, total, selectedId, setSelected, categories, selectedCategories, setSelectedCategories, visible, finalPrice, sortOptions, sortBy, setSortBy, maxPrice, setMaxPrice, search, setSearch, isInStock, setIsInStock, highestPrice }) {
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEM_PER_PAGE = 30; // Dami ng items kada page
    const totalPages = Math.max(1, Math.ceil(visible.length / ITEM_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
    const endIndex = startIndex + ITEM_PER_PAGE;

    const paginatedProducts = visible.slice(startIndex, endIndex)

    return (
        <>
            <Header
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
                setCurrentPage={setCurrentPage}
                paginatedProducts={paginatedProducts}
                highestPrice={highestPrice}
            />

            <div className="home-page">
                <ProductGrid
                    loading={loading}
                    error={error}
                    selectedId={selectedId}
                    setSelected={setSelected}
                    cart={cart}
                    setCart={setCart}
                    finalPrice={finalPrice}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    paginatedProducts={paginatedProducts}
                />
            </div>
        </>
    )
}
export default HomePage;