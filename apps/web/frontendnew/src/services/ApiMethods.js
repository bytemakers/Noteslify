import api from "./Interceptors";

export const signup = (data) => {
    return api.post("signup", data);
};
export const login = (data) => {
    return api.post("login", data);
};