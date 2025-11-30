import axios from "axios";

export const API_URL = "https://6929b57c9d311cddf34af524.mockapi.io/submissions";

export const getSubmissions = () => axios.get(API_URL);
export const getSingleSubmission = (id) => axios.get(`${API_URL}/${id}`);
export const createSubmission = (data) => axios.post(API_URL, data);
export const updateSubmission = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteSubmission = (id) => axios.delete(`${API_URL}/${id}`);
