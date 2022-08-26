import axios from "axios";//Axios is a library that serves to create HTTP requests that are present externally.

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance; 