import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useSelector } from "react-redux";
import { DetailPictureWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPicture = memo(() => {
  const {
    detailInfo: { picture_urls = [] },
  } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const [showBrowser, setShowBrowser] = useState(false);

  function btnClick() {
    setShowBrowser(true);
  }
  return (
    <DetailPictureWrapper>
      <div className="pictureBox">
        <div className="pictureLeft" onClick={btnClick}>
          <img src={picture_urls[0]} alt="" />
          <div className="cover"></div>
        </div>
        <div className="pictureRight">
          {picture_urls.slice(1, 5).map((picture) => {
            return (
              <div key={picture} className="item" onClick={btnClick}>
                <img src={picture} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
        <div className="pictureBtn" onClick={btnClick}>
          显示图片
        </div>
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </DetailPictureWrapper>
  );
});

DetailPicture.propTypes = {
  pictureUrls: PropTypes.array,
};

export default DetailPicture;
