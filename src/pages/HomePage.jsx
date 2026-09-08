import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
import { useState } from "react";

function HomePage({ products, total, selectedId, setSelected, categories, setSelectedCategories, filteredProducts}) {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header products={products} total={total} cart={cart} setCart={setCart} categories={categories} setSelectedCategories={setSelectedCategories}/>
            <div className="home-page">
                <ProductGrid
                    selectedId={selectedId}
                    setSelected={setSelected}
                    setCart={setCart}
                    filteredProducts={filteredProducts}
                />
            </div>
        </>
    )
}
export default HomePage;