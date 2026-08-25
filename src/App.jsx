import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data);
    }
    getProducts();
  }, [])
    console.log(products);
    
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
