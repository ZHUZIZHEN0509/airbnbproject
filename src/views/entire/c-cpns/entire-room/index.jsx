import React, { memo } from "react";
import { useSelector } from "react-redux";
import { EntireRoomWrapper } from "./style";
import RoomItem from "@/components/room-item";

const EntireRoom = memo((props) => {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading,
  }));
  return (
    <EntireRoomWrapper>
      <div className="roomListBox">
        {roomList?.map((roomItem) => {
          return (
            <RoomItem key={roomItem._id} item={roomItem} itemWidth={"20%"} />
          );
        })}
      </div>
      {isLoading && <div className="roomListMask"></div>}
    </EntireRoomWrapper>
  );
});

export default EntireRoom;
