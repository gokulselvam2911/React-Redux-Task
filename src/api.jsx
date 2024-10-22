import axios from 'axios';

const API_URL = 'https://6716a7d63fcb11b265d33f1b.mockapi.io/react-redux-pd-api'; // Replace with your actual API URL

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
