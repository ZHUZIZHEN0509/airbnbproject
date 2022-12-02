import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { ScrollViewWrapper } from "./style";
/***
 * 思路：
 *   1.可滚动距离 = 总滚动距离 - 可见区域距离
 *   2.移动距离 = 元素距左边的offsetLeft距离
 *   3.当移动距离大于0，显示左侧按钮。
 *   4.当可滚动距离大于移动距离，显示右侧按钮。否则隐藏
 */

const ScrollView = memo((props) => {
  const { tabsStyle = { padding: "16px 0px" } } = props;
  const tasInstance = useRef();
  const [isShowRight, setShowRight] = useState(false);
  const [isShowLeft, setShowLeft] = useState(false);
  //元素索引
  const [currentIndex, setCurrentIndex] = useState(0);
  //可移动距离 ***useRef存储总距离，减少setSTate带来的多次渲染问题
  const scrollDistance = useRef();

  useEffect(() => {
    //总的可滚动距离
    const totalDistance = tasInstance.current.scrollWidth;
    //可见区域宽度
    const clientDistance = tasInstance.current.clientWidth;
    //可移动距离
    const moveDistance = totalDistance - clientDistance;
    scrollDistance.current = moveDistance;
    setShowRight(moveDistance > 0);
  }, [props.children]);

  function handleTabsClick(offsetIndex) {
    const index = currentIndex + offsetIndex;
    //获取需要滚动距离
    const itemInstance = tasInstance.current.children[index];
    const distance = itemInstance.offsetLeft;
    //设置移动
    tasInstance.current.style = `transform: translate(-${distance}px,0)`;
    //设置索引
    setCurrentIndex(index);
    //当offsetLeft大于0显示左边按钮
    setShowLeft(distance > 0);
    //当可移动距离大于移动距离隐藏右边按钮
    setShowRight(scrollDistance.current > distance);
  }
  return (
    <ScrollViewWrapper style={tabsStyle}>
      <div className="scrollContainer">
        {isShowLeft && (
          <div className="btn btnLeft" onClick={() => handleTabsClick(-1)}>
            <IconArrowLeft />
          </div>
        )}
        {isShowRight && (
          <div className="btn btnRight" onClick={(e) => handleTabsClick(+1)}>
            <IconArrowRight />
          </div>
        )}
        <div className="tabsBox" ref={tasInstance}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {
  tabsStyle: PropTypes.object,
};

export default ScrollView;
