import API from "./client";

//API interface for registering a user
export const register = async (data) => {
    try {
        const response = await API.post('auth/register', data);

        return response.data;

    } catch(err) {
        throw err.response.data;
    }
}

export const login = async(credentials) => {
    try {
        const response = await API.post('auth/login', credentials);
        
        return response.data;
    } catch(err) {
        throw err.response.data
    }
}