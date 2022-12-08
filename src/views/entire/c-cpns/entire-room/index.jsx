import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";
import { EntireRoomWrapper } from "./style";
import RoomItem from "@/components/room-item";

const EntireRoom = memo(() => {
  const { roomList, isLoading, totalCount } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleRoomClick(item) {
    dispatch(changeDetailInfoAction(item));
    navigate("/detail");
  }
  return (
    <EntireRoomWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="roomListBox">
        {roomList?.map((roomItem) => {
          return (
            <RoomItem
              key={roomItem._id}
              item={roomItem}
              itemWidth={"20%"}
              pictureUrls={roomItem.picture_urls}
              roomItemClick={(e) => handleRoomClick(roomItem)}
            />
          );
        })}
      </div>
      {isLoading && <div className="roomListMask"></div>}
    </EntireRoomWrapper>
  );
});

export default EntireRoom;
