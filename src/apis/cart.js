import API from "./client";

export const addToCart = async(productId, qty) => {
    try {
        const response = await API.post(`carts/mine/items`, { productId, qty });
        console.log(response.data);

        return response.data;
    }catch(err) {
        throw err.response.data;
    }
}

export const removeFromCart = async(cartItemId) => {
    try {
        const response = await API.delete(`carts/mine/items/${cartItemId}`);
        console.log(response.data)

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const fetchCard = async() => {
    try {
        const response = await API.get(`carts/mine`);
        console.log(response.data)

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}