import { useEffect, useState } from 'react'
import { getCategories, getProducts } from './api/products'
import './App.css'
import HomePage from './pages/HomePage'
import { getDiscountedPrice } from './utils/format'

function App() {
  const [products, setProducts] = useState([]); // from the API
  const [categories, setCategories] = useState([]); // from the API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState([]);
  const [selectedId, setSelected] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [sortBy, setSortBy] = useState("featured")
  const [maxPrice, setMaxPrice] = useState(1000);
  const [search, setSearch] = useState("");
  const [isInStock, setIsInStock] = useState(false);

  const sortOptions = ["featured", "price-asc", "price-desc", "name-asc"]
  //const categories = ["all", ...new Set(products.map((p) => p.category))]

  const finalPrice = (product) => getDiscountedPrice(product.price, product.discountPercentage);
  // const filteredProducts = selectedCategories === "all" ? products : products.filter((product) => product.category === selectedCategories)
  const visible = [...products]
    .filter((product) => {
      const categoryMatch = selectedCategories === "all" || product.category === selectedCategories
      const priceMatch = finalPrice(product) <= maxPrice
      const searchMatch = product.title.toLowerCase().includes(search.toLowerCase());
      const stockMatch = !isInStock || product.stock > 0

      return categoryMatch && priceMatch && searchMatch && stockMatch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return finalPrice(a) - finalPrice(b);
      if (sortBy === "price-desc") return finalPrice(b) - finalPrice(a);
      if (sortBy === "name-asc") return a.title.localeCompare(b.title);
      return 0;
    });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      try {
        const { productData, productTotal } = await getProducts();
        const { productCategories } = await getCategories();

        setProducts(productData);
        setTotal(productTotal);
        setCategories(productCategories);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts();
  }, [])

  return (
        <HomePage
          loading={loading}
          error={error}
          total={total}
          selectedId={selectedId}
          setSelected={setSelected}
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          visible={visible}
          finalPrice={finalPrice}
          sortOptions={sortOptions}
          sortBy={sortBy}
          setSortBy={setSortBy}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          search={search}
          setSearch={setSearch}
          isInStock={isInStock}
          setIsInStock={setIsInStock}
        />
  )
}

export default App
