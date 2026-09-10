import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import HomePage from './pages/HomePage'
import { getDiscountedPrice } from './utils/format'

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [selectedId, setSelected] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [sortBy, setSortBy] = useState("featured")

  const sortOptions = ["featured", "price-asc", "price-desc", "name-asc"]
  const categories = ["all", ...new Set(products.map((p) => p.category))]

  const finalPrice = (product) => getDiscountedPrice(product.price, product.discountPercentage).toFixed(2);
  // const filteredProducts = selectedCategories === "all" ? products : products.filter((product) => product.category === selectedCategories)
  const visible = [...products]
    .filter((product) => {
      return selectedCategories === "all" || product.category === selectedCategories
    }).sort((a, b) => {
      if (sortBy === "price-asc") return finalPrice(a) - finalPrice(b);
      if (sortBy === "price-desc") return finalPrice(b) - finalPrice(a);
      if (sortBy === "name-asc") return a.title.localeCompare(b.title);
      return 0;
    });

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      const productData = response.data.products;
      const productTotal = response.data.total;
      setProducts(productData);
      setTotal(productTotal)
    }
    getProducts();
  }, [])

  console.log(visible)
  return (
    <>
      <HomePage
        products={products}
        total={total}
        selectedId={selectedId}
        setSelected={setSelected}
        categories={categories}
        setSelectedCategories={setSelectedCategories}
        visible={visible}
        finalPrice={finalPrice}
        sortOptions={sortOptions}
        setSortBy={setSortBy}
      />
    </>
  )
}

export default App
