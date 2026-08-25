import { Header } from "../components/Header";
import './HomePage.css'
import ProductGrid from "./ProductGrid";
function HomePage() {
    return (
        <>
            <Header />
            <div className="home-page">
                <ProductGrid/>
            </div>
        </>
    )
}
export default HomePage;