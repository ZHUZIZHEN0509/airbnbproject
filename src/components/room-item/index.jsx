import React, { memo, useRef } from "react";
import PropTypes from "prop-types";
import { Carousel, Rate } from "antd";
import classNames from "classnames";
import { RoomItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import { useState } from "react";

const RoomItem = memo((props) => {
  const { item, itemWidth = "25%", pictureUrls = [] } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const carouselRef = useRef();

  //轮播图切换
  function cutImage(isLeft) {
    isLeft ? carouselRef.current.prev() : carouselRef.current.next();
  }

  //当前轮播图索引
  function handleCarouselChange(currentIndex) {
    setSelectIndex(currentIndex);
  }

  return (
    <RoomItemWrapper itemWidth={itemWidth}>
      {/* <div className="roomImageBox">
        <img className="yesImage" src={item.picture_url} alt="" />
      </div> */}
      <div className="pictureBox">
        <Carousel
          dots={false}
          ref={carouselRef}
          afterChange={handleCarouselChange}
        >
          {pictureUrls.map((picture) => {
            return (
              <div key={picture} className="roomImageBox">
                <img src={picture} alt="" className="yesImage" />
              </div>
            );
          })}
        </Carousel>
        <div className="btn btnLeft" onClick={(e) => cutImage(true)}>
          <IconArrowLeft width="24" height="24" />
        </div>
        <div className="btn btnRight" onClick={(e) => cutImage(false)}>
          <IconArrowRight width="24" height="24" />
        </div>
        <div className="bottomIndicator">
          <Indicator clickIndex={selectIndex}>
            {pictureUrls.map((item, index) => {
              return (
                <div key={item} className="dotBox">
                  <span
                    className={classNames("dot", {
                      activeDot: selectIndex === index,
                    })}
                  ></span>
                </div>
              );
            })}
          </Indicator>
        </div>
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
  pictureUrls: PropTypes.array,
};

export default RoomItem;
