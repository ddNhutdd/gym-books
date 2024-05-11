import axios from "axios";

const axiosInstance = axios.create({
	baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books',
	timeout: 1800_000,
});


export default axiosInstance;