import React, { memo } from "react";
import PropTypes from "prop-types";
import { DetailPictureWrapper } from "./style";

const DetailPicture = memo((props) => {
  const { pictureUrls = [] } = props;
  return (
    <DetailPictureWrapper>
      <div className="pictureLeft">
        <img src={pictureUrls[0]} alt="" />
        <div className="cover"></div>
      </div>
      <div className="pictureRight">
        {pictureUrls.slice(1, 5).map((picture) => {
          return (
            <div key={picture} className="item">
              <img src={picture} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
    </DetailPictureWrapper>
  );
});

DetailPicture.propTypes = {
  pictureUrls: PropTypes.array,
};

export default DetailPicture;
