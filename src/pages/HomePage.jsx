import { Header } from "../components/Header";
import './HomePage.css'
import ProductsGrid from "./ProductsGrid";
function HomePage() {
    return (
        <>
            <Header />
            <div className="home-page">
                <ProductsGrid/>
            </div>
        </>
    )
}
export default HomePage;