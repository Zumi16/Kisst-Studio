import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [selectedId, setSelected] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState("all");
  const categories = ["all", ...new Set(products.map((p) => p.category))]
  const filteredProducts = selectedCategories === "all" ? products : products.filter((product) => product.category === selectedCategories)

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

  console.log(categories);
  console.log(selectedCategories)
  return (
    <>
      <HomePage 
        products={products} 
        total={total} 
        selectedId={selectedId} 
        setSelected={setSelected} 
        categories={categories} 
        setSelectedCategories={setSelectedCategories}
        filteredProducts={filteredProducts}
      />
    </>
  )
}

export default App
