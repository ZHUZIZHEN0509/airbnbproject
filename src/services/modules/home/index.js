import ZHURequest from "@/services";

//获取高性价比房源
export const getHomeGoodPriceData = () => {
  return ZHURequest.get({
    url: "/home/goodprice",
  });
};

//获取高分好评房源
export const getHomeHighScoreData = () => {
  return ZHURequest.get({
    url: "/home/highScore",
  });
};

//获取热门目的地
export const getHomeDiscountData = () => {
  return ZHURequest.get({
    url: "/home/discount",
  });
};
