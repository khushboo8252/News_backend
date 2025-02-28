import axios from "axios";

const API_URL = "https://news-backend-az3l.onrender.com/api/news"; // Change this if needed

export const fetchTrendingNews = async () => {
  const response = await axios.get(`${API_URL}/trending`);
  return response.data;
};

export const fetchNewsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/category/${category}`);
  return response.data;
};
