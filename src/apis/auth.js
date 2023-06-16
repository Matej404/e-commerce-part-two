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

export const isLoggedIn = async() => {
    try {
        const response = await API.get('auth/logged_in')

        return response.data;
    }catch(err) {
        throw err.response.data;
    }
}

//logout
export const logout = async() => {
    try {
        const response = await API.post('auth/logout');

        return response;
    } catch(err) {
        throw err;
    }
}