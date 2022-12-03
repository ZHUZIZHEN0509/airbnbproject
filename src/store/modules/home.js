import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
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
    //设置热门精彩房源
    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });
    //设置你可能想去数据
    getHomeLongforData().then((res) => {
      dispatch(changeHomeLongforInfoAction(res));
    });
    //设置plus房源
    getHomePlusData().then((res) => {
      dispatch(changeHomeInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}, //高性价比房源
    highScoreInfo: {}, //高分好评房源
    discountInfo: {}, //热门目的地
    hotRecommendInfo: {}, //热门精彩房源
    longforInfo: {}, //你可能想去
    plusInfo: {},
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
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeHomeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changeHomeInfoAction(state, { payload }) {
      state.plusInfo = payload;
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
  changeHotRecommendInfoAction,
  changeHomeLongforInfoAction,
  changeHomeInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
