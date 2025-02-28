import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsByCategory = createAsyncThunk(
  "news/getNewsByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://news-backend-az3l.onrender.com/api/news?category=${category}`);
      return response.data; // Assuming the API returns an array of news articles
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch news");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: { news: [], selectedCategory: "", loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsByCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.selectedCategory = action.meta.arg;
      })
      .addCase(getNewsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(getNewsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
