import axios from "axios";

export const getProducts = async (signal) => {
    const response = await axios.get('https://dummyjson.com/products?limit=0', { signal });
    const productData = response.data.products;
    const productTotal = response.data.total;

    return { productData, productTotal }
}

export const getCategories = async (signal) => {
    const response = await axios.get('https://dummyjson.com/products/categories', { signal })
    const categoriesData = response.data;

    const productCategories = ["all", ...categoriesData.map((category) => category.slug)];

    return { productCategories };
}
