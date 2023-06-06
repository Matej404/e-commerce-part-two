import API from "./client";

export const fetchProducts = async() => {
    try {
        const response = await API.get(`products`);
        console.log(response.data)

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const fetchProduct = async(productId) => {
    try {
        const response = await API.get(`products/${productId}`);
        console.log(response.data)

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}