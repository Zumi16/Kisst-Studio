import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=0');
    const productData = response.data.products;
    const productTotal = response.data.total;

    return { productData, productTotal }
}

export const getCategories = async () => {
    const { productData } = await getProducts();
    const productCategories = ["all", ...new Set(productData.map((product) => product.category))];

    return { productCategories };
}