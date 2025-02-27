import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const googleAuth=(code)=>{
    api.get(`/google-auth?code=${code}`);
}