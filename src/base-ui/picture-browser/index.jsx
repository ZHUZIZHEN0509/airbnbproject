import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import classNames from "classnames";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import { PictureBrowserWrapper } from "./style";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import Indicator from "../indicator";
import { useState } from "react";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;

  //图片索引
  const [currentIndex, setCurrentIndex] = useState(0);
  //显示隐藏list列表
  const [showList, setShowList] = useState(true);
  //判断是上一张还是下一张
  const [isNext, setIsNext] = useState(false);
  //让滚动消失
  useEffect(() => {
    //让滚动消失
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  //左右按钮的点击
  function sliderClick(isLeft = true) {
    let newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isLeft);
  }
  //点击图片列表
  function pictureClick(index) {
    setCurrentIndex(index);
  }
  //显示隐藏图片list列表
  function showImageList() {
    setShowList(!showList);
  }
  //关闭弹框
  function closeBrowser() {
    if (closeClick) closeClick();
  }
  return (
    <PictureBrowserWrapper showList={showList} isNext={isNext}>
      <div className="browserHeader">
        <div className="close-btn" onClick={closeBrowser}>
          <IconClose />
        </div>
      </div>
      <div className="browserCenter">
        <div
          className="center-btn center-left"
          onClick={(e) => sliderClick(true)}
        >
          <IconArrowLeft width="77" height="77" />
        </div>
        <div className="center-center">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div
          className="center-btn center-right"
          onClick={(e) => sliderClick(false)}
        >
          <IconArrowRight width="77" height="77" />
        </div>
      </div>
      <div className="browserFooter">
        <div className="footerBox">
          <div className="footerHeader">
            <div className="headerLeft">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="headerRight" onClick={showImageList}>
              <span>隐藏照片列表</span>
              <IconTriangleArrowBottom />
            </div>
          </div>
          <div className="footerList">
            <Indicator clickIndex={currentIndex}>
              {pictureUrls.length &&
                pictureUrls.map((picture, index) => {
                  return (
                    <div key={picture} className="pictureItem">
                      <img
                        className={classNames({
                          activePicture: currentIndex === index,
                        })}
                        src={picture}
                        alt=""
                        onClick={(e) => pictureClick(index)}
                      />
                    </div>
                  );
                })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
