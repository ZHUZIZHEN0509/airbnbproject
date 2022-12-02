import React, { memo } from "react";
import PropTypes from "prop-types";
import { RoomListWrapper } from "./style";
import RoomItem from "../room-item";

const RoomList = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomListWrapper>
      {roomList &&
        roomList.slice(0, 8).map((item) => {
          return <RoomItem key={item.id} item={item} itemWidth={itemWidth} />;
        })}
    </RoomListWrapper>
  );
});

RoomList.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default RoomList;
