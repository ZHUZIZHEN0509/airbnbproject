import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ScrollView from "@/base-ui/srcoll-view";
import { RoomTabsWrapper } from "./style";

const RoomTabs = memo((props) => {
  //tabItemClick回调函数
  const { tabList = [], tabItemClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function changeCurrentIndex(index, name) {
    setCurrentIndex(index);
    tabItemClick(name);
  }

  return (
    <RoomTabsWrapper>
      <ScrollView>
        {tabList.map((item, index) => {
          return (
            <div
              className={classNames("tabItem", {
                activeItem: currentIndex === index,
              })}
              key={item}
              onClick={() => changeCurrentIndex(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </RoomTabsWrapper>
  );
});

RoomTabs.propTypes = {
  tabList: PropTypes.array,
  tabItemClick: PropTypes.func,
};

export default RoomTabs;
