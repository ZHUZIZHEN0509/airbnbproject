import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import RoomHeader from "@/components/room-header";
import RoomList from "@/components/room-list";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
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
        <RoomHeader title={goodPriceInfo.title} />
        <RoomList roomList={goodPriceInfo.list} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
