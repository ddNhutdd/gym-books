import axiosInstance from "./config.services";

export const getAllBook = () => {
	try {
		return axiosInstance.get();
	} catch (error) {
		console.log(error);
	}
}

export const getBookById = (id) => {
	try {
		return axiosInstance.get(`/${id}`);
	} catch (error) {
		console.log(error);
	}
}


export const addBook = (book) => {
	try {
		return axiosInstance.post(``, book);
	} catch (error) {
		console.log(error);
	}
}

export const updateBook = (id, book) => {
	try {
		return axiosInstance.put(`/${id}`, book);
	} catch (error) {
		console.log(error);
	}
}

export const deleteBook = (id) => {
	try {
		return axiosInstance.delete(`/${id}`);
	} catch (error) {
		console.log(error);
	}
}