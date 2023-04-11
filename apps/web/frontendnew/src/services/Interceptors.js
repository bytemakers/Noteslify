import axios from "axios";
import WebConstants from "../Utils/WebConstants";
// import { getLocalData } from "../utils/webHelperFunctions";
const api = axios.create({
    baseURL: WebConstants.API.SERVER_URL,
});

// Add a request interceptor
api.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("jwtToken"); //getLocalData(WebConstants.ACCESS_TOKEN);
        request.headers = { Authorization: `Bearer ${token}` };
        console.log("Request Interceptor = ", request);
        return request;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Do something with response error
        return error.response;
    }
);

export default api;