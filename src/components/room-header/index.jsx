import React, { memo } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";

const RoomHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWrapper>
      <h2 className="titleText">{title}</h2>
      {subTitle && <div className="subTitle">{subTitle}</div>}
    </HeaderWrapper>
  );
});

RoomHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default RoomHeader;
