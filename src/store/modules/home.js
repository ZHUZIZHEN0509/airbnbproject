import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async (extraArg, { dispatch, getState }) => {
    // const res = await getHomeGoodPriceData();
    // console.log("res=", res);
    // return res;

    //获取多个请求的数据
    //设置高性价比房源
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    //设置高分好评房源
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    //设置热门目的地数据
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
