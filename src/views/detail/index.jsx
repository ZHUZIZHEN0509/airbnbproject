import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import DetailPicture from "./c-cpns/detail-picture";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  console.log(detailInfo);
  return (
    <DetailWrapper>
      {detailInfo.picture_urls && detailInfo.picture_urls.length > 0 ? (
        <DetailPicture pictureUrls={detailInfo.picture_urls} />
      ) : (
        ""
      )}
    </DetailWrapper>
  );
});

export default Detail;
