import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [selectedId, setSelected] = useState(null);

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

  return (
    <>
      <HomePage products={products} total={total} selectedId={selectedId} setSelected={setSelected}/>
    </>
  )
}

export default App
