import ZHURequest from "@/services";

export const getHomeGoodPriceData = () => {
  return ZHURequest.get({
    url: "/home/goodprice",
  });
};
