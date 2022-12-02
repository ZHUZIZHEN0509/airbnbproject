import React, { memo } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { item, itemWidth = "25%" } = props;
  return (
    <RoomItemWrapper itemWidth={itemWidth}>
      <div className="roomImageBox">
        <img className="yesImage" src={item.picture_url} alt="" />
      </div>
      <div className="roomInfo">
        <div
          className="infoMessage"
          style={{ color: `${item.verify_info.text_color}` }}
        >
          {item.verify_info.messages.join(" · ")}
        </div>
        <div className="infoName">{item.name}</div>
        <div className="infoPrice">{`${item.price_format}/晚`}</div>
        <div className="infoStar">
          <Rate
            className="atRate"
            allowHalf
            disabled
            defaultValue={item.star_rating ?? 5}
          />
          <span className="reviews_count">{item.reviews_count}</span>
          {item.bottom_info && (
            <span>
              {"\u00A0"}·{"\u00A0"}
              {item.bottom_info.content}
            </span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  item: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
