import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async (extraArg, { dispatch, getState }) => {
    const res = await getHomeGoodPriceData();
    console.log("res=", res);
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export default homeSlice.reducer;
