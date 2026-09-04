import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
import { useState } from "react";

function HomePage({products, total, selectedId,setSelected}) {
    const [cart, setCart] = useState([]);
    // Tuloy sa cart

    return (
        <>
            <Header products={products} total={total} cart={cart} setCart={setCart}/>
            <div className="home-page">
                <ProductGrid 
                    products={products} 
                    selectedId={selectedId} 
                        setSelected={setSelected} 
                        setCart={setCart}
                    />
            </div>
        </>
    )
}
export default HomePage;