import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
function HomePage({products, total, selectedId,setSelected}) {
    return (
        <>
            <Header products={products} total={total}/>
            <div className="home-page">
                <ProductGrid products={products} selectedId={selectedId} setSelected={setSelected}/>
            </div>
        </>
    )
}
export default HomePage;