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

//获取热门精彩房源
export const getHomeHotRecommendData = () => {
  return ZHURequest.get({
    url: "/home/hotrecommenddest",
  });
};

//获取你可能想去数据
export const getHomeLongforData = () => {
  return ZHURequest.get({
    url: "/home/longfor",
  });
};

//获取plus房源
export const getHomePlusData = () => {
  return ZHURequest.get({
    url: "/home/plus",
  });
};
