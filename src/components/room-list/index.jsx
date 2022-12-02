import React, { memo } from "react";
import PropTypes from "prop-types";
import { RoomListWrapper } from "./style";
import RoomItem from "../room-item";

const RoomList = memo((props) => {
  const { roomList } = props;
  return (
    <RoomListWrapper>
      {roomList &&
        roomList.slice(0, 8).map((item) => {
          return <RoomItem key={item.id} item={item} />;
        })}
    </RoomListWrapper>
  );
});

RoomList.propTypes = {
  roomList: PropTypes.array,
};

export default RoomList;
