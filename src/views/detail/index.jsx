import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import DetailPicture from "./c-cpns/detail-picture";
import { changeHeaderConfigAction } from "@/store/modules/main";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    //设置detail页面是否固定
    dispatch(changeHeaderConfigAction({ isFixed: false, isTopAlpha: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
