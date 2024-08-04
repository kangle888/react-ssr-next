import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 1000,
    homeInfo: {},
  },
  reducers: {
    increase: (state, {payload}) => {
      console.log('payload', {payload});
    
      state.count += payload;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.fulfilled, (state, {payload}) => {
      // console.log('action', action);
      state.homeInfo = payload;
    });
  }
});
// 异步action
export const fetchHomeData = createAsyncThunk('fetchHomeData', async () => {
  const res = await axios.get('http://codercba.com:9060/juanpi/api/homeInfo');
  return res.data;
});



export const {increase, decrease} = homeSlice.actions;
export default homeSlice.reducer;