import React, { memo, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { HeaderWrapper } from "./style";
import LeftHeader from "./c-cpns/left-header";
import CenterHeader from "./c-cpns/center-header";
import RightHeader from "./c-cpns/right-header";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useState } from "react";

/**
 * header切换思路：
 *  1.首先分别写出静态的两种状态
 *  2.通过点击search，切换成另一种状态，判断search状态变化，切换
 *  3.监听滚动hooks，当search状态为false时记录滚动的值，当search状态为true且scrollY-上一次scrollY > 30,设置search为false，元素消失
 *  4.如果滚动到顶部，且scroll===0,设置isAlpha为true开启动画
 *
 */

const AppHeader = memo(() => {
  //搜索框状态
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, isTopAlpha } = headerConfig;
  //scroll位置 , 监听滚动位置
  const { scrollY } = useScrollPosition();
  //记录滚动的值
  const preY = useRef(0);
  if (!isSearch) preY.current = scrollY;
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30  ***切换成搜索
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false);
  /** 滚动到底部动画，顶部需要透明且scrollY为0 ***切换成tabs  */
  const isAlpha = isTopAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <LeftHeader />
        <CenterHeader
          isSearch={isAlpha || isSearch}
          searchClick={(e) => setIsSearch(true)}
        />
        <RightHeader />
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
