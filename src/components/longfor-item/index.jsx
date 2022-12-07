import React, { memo } from "react";
import PropTypes from "prop-types";
import { LongforItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const {
    longforData: { city, price, picture_url },
  } = props;

  return (
    <LongforItemWrapper>
      <div className="longforBox">
        <div className="coverBox"></div>
        <img src={picture_url} alt="" />
        <div className="longforText">
          <div className="city">{city}</div>
          <div className="price">均价 {price}</div>
        </div>
      </div>
    </LongforItemWrapper>
  );
});

LongforItem.propTypes = {
  longforData: PropTypes.object,
};

export default LongforItem;
