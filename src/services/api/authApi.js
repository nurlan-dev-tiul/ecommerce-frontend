import { apiClient } from "./index";

export const loginApi = async (data) => {
    return await apiClient.post('/auth/login', data);
}

export const registerApi= async (data) => {
    return await apiClient.post('/auth/register', data);
}

export const getMeProfileApi= async () => {
    return await apiClient.get('/auth/profile');
}