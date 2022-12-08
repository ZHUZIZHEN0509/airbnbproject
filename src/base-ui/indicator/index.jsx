import React, { memo } from "react";
import PropTypes from "prop-types";
import { IndicatorWrapper } from "./style";
import { useRef } from "react";
import { useEffect } from "react";

const Indicator = memo((props) => {
  const { clickIndex = 0 } = props;
  const indicatorRef = useRef();
  useEffect(() => {
    //总滚动距离
    const scrollDistance = indicatorRef.current.scrollWidth;
    //可见区域宽度
    const clientDistance = indicatorRef.current.clientWidth;
    //可移动的总距离
    const distanceTotal = scrollDistance - clientDistance;
    //需要移动的元素
    const distanceInstance = indicatorRef.current.children[clickIndex];
    //选中元素宽度
    const selectInstanceWidth = distanceInstance.clientWidth;
    //元素到左边距离
    const offsetLeftDistance = distanceInstance.offsetLeft;
    const leftDistance = offsetLeftDistance + selectInstanceWidth * 0.5;
    //元素需要移动的距离
    let moveDistance = leftDistance - clientDistance * 0.5;
    //如果元素移动距离小于0就不移动了
    if (moveDistance < 0) moveDistance = 0;
    //如果元素移动距离比总滚动距离大也不移动了
    if (moveDistance > distanceTotal) moveDistance = distanceTotal;
    //移动元素
    indicatorRef.current.style.transform = `translate(${-moveDistance}px,0)`;
  }, [clickIndex]);

  return (
    <IndicatorWrapper>
      <div ref={indicatorRef} className="indicatorBox">
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  clickIndex: PropTypes.number,
};

export default Indicator;
