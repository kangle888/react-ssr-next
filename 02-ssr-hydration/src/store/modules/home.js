import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 1000,
    home: {},
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.home = action.payload.data;
      console.log('fetchHomeData.fulfilled', action);
    });
  },

});
export const fetchHomeData = createAsyncThunk('fetchHomeData', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'home',
          age: 18,
        },
      });
    }, 1000);
  });
});

export const { increase, decrease } = homeSlice.actions;
export default homeSlice.reducer;