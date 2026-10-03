import axios from "axios";

export const getProducts = async (signal) => {
    const response = await axios.get('https://dummyjson.com/products?limit=0', {signal});
    const productData = response.data.products;
    const productTotal = response.data.total;

    return { productData, productTotal }
}

export const getCategories = async (signal) => {
    const { productData } = await getProducts(signal);
    const productCategories = ["all", ...new Set(productData.map((product) => product.category))];

    return { productCategories };
}