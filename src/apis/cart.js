import API from "./client";

export const addToCart = async(productId, qty) => {
    try {
        const response = await API.post(`cart/mine/item`, productId, qty);

        return response.data;
    }catch(err) {
        throw err.response.data;
    }
}