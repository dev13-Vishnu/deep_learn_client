import apiClient from "./apiClient";

export const authService = {
    register: (data: {name: string; email: string; passwordRaw: string; role: string}) => {
        return apiClient.post("/auth/register", data);
    },
    login: (data: {email: string, passwordRaw: string}) => {
        return apiClient.post("/auth/login", data);
    }
}