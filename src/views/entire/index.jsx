import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRoom from "./c-cpns/entire-room";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import { changeHeaderConfigAction } from "@/store/modules/main";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    //设置entire页面是否固定
    dispatch(changeHeaderConfigAction({ isFixed: true, isTopAlpha: false }));
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
