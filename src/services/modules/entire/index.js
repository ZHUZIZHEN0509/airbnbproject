import ZHURequest from "@/services";

export const getEntireListData = (offset = 0, size = 20) => {
  return ZHURequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
};
