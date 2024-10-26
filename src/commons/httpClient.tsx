import axios from "axios";

import { BASE_URL } from "./apiUrl";

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

httpClient.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token");

        if(token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default httpClient;