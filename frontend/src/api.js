// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:3000",
// });

// export const googleAuth=(code)=>{
//     api.get(`/google-auth?code=${code}`);
// }
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/auth",
});

export const googleAuth = async (code) => {
    try {
        const response = await api.get(`/google?code=${code}`);
        return response.data; // Ensure the function returns the response data
    } catch (error) {
        console.error("Google Auth API call failed:", error);
        throw error; // Rethrow the error so the caller can handle it
    }
};
