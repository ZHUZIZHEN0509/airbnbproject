import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
// import RoomHeader from "@/components/room-header";
// import RoomList from "@/components/room-list";
//使用高性价比房源和高分房源二次封装组件
import HomeHousingResourceV1 from "./c-cpns/home-housing-resourcev1";
import HomeHousingResourceV2 from "./c-cpns/home-housing-resourcev2";
import { isEmptyO } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeHousingResourceV3 from "./c-cpns/home-housing-resourcev3";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  //请求home页面房源数据
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="roomBox">
        {/* 高性价比房源 */}
        {/* <RoomHeader title={goodPriceInfo.title} />
        <RoomList roomList={goodPriceInfo.list} /> */}

        {/* 高分好评房源 */}
        {/* <RoomHeader
          title={highScoreInfo.title}
          subTitle={highScoreInfo.subtitle}
        />
        <RoomList roomList={highScoreInfo.list} /> */}

        {/* 热门目的地 */}
        {isEmptyO(discountInfo) && (
          <HomeHousingResourceV2 houseResourceData={discountInfo} />
        )}
        {/* 热门精彩房源 */}
        {isEmptyO(hotRecommendInfo) && (
          <HomeHousingResourceV2 houseResourceData={hotRecommendInfo} />
        )}
        {/* 你可能想去 */}
        {isEmptyO(longforInfo) && <HomeLongfor longforData={longforInfo} />}
        {/* 高性价比房源 ---判断是否为空，避免多次渲染提高性能*/}
        {isEmptyO(goodPriceInfo) && (
          <HomeHousingResourceV1 houseResourceData={goodPriceInfo} />
        )}
        {/* 高分好评房源*/}
        {isEmptyO(highScoreInfo) && (
          <HomeHousingResourceV1 houseResourceData={highScoreInfo} />
        )}
        {/* plus房源 */}
        {isEmptyO(plusInfo) && (
          <HomeHousingResourceV3 houseResourceData={plusInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
