import { getEntireListData } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_COUNT,
  CHANGE_ROOM_LIST,
  CHANGE_IS_LOADING,
} from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
});
export const changeTotalPageAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount,
});
export const changeRoomListAction = (roomList) => ({
  type: CHANGE_ROOM_LIST,
  roomList,
});
export const fetchRoomListAction = (offsetPage = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeIsLoadingAction(true));
    const { list, totalCount } = await getEntireListData(offsetPage * 20);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalPageAction(totalCount));
    //修改currentPage
    dispatch(changeCurrentPageAction(offsetPage));
  };
};
export const changeIsLoadingAction = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading,
});
