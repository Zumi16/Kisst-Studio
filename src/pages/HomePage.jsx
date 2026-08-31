import { useState } from "react";
import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
function HomePage({products, total, selectedId,setSelected}) {
    const [cartOpen, setCartOpen] = useState(false); 
    // Continue dito

    return (
        <>
            <Header products={products} total={total} cartOpen={cartOpen} setCartOpen={setCartOpen}/>
            <div className="home-page">
                <ProductGrid products={products} selectedId={selectedId} setSelected={setSelected}/>
            </div>
        </>
    )
}
export default HomePage;