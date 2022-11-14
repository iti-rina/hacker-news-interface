import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  status: "idle",
  error: null
});

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const NEW_STORIES_URL = `${BASE_URL}/newstories.json`;

export const fetchPosts = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetch(NEW_STORIES_URL);
  const data = await response.json();
  const promises = [];
  data.slice(0, 100).forEach(id => promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.json())));
  return await Promise.all(promises);
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        newsAdapter.setAll(state, action.payload);
        state.status = "succeded";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export const { 
  selectIds: selectNewsIds, 
  selectById: selectStoryById,
  selectAll: selectAllStories
} = newsAdapter.getSelectors(state => state.news);

export const getStatus = state => state.news.status;

export default newsSlice.reducer;