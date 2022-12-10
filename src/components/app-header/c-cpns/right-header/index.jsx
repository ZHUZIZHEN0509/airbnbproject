import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const RightHeader = memo((props) => {
  const [showList, setShowList] = useState(false);
  //监听window点击关闭
  useEffect(() => {
    function closeMenu() {
      setShowList(false);
    }
    window.addEventListener("click", closeMenu, true);
    return () => {
      window.removeEventListener("click", closeMenu, true);
    };
  }, []);

  //监听menu点击
  const handleMenuClick = () => {
    setShowList(true);
  };
  return (
    <RightWrapper>
      <div className="btnBox">
        <div>登录</div>
        <div>注册</div>
        <div>
          <IconGlobal />
        </div>
      </div>
      <div className="menuBox" onClick={() => handleMenuClick()}>
        <IconMenu />
        <div className="menuRight">
          <IconAvatar />
        </div>
        {showList && (
          <div className="menuList">
            <div className="listTop">
              <span>注册</span>
              <span>登录</span>
            </div>
            <div className="listBottom">
              <span>来爱彼迎发布房源</span>
              <span>开展体验</span>
              <span>帮助</span>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default RightHeader;
