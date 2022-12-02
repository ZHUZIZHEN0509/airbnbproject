import React, { memo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { RoomFooterWrapper } from "./style";

const RoomFooter = memo((props) => {
  const { footerName } = props;
  let seeAll = "查看全部";
  if (footerName) seeAll = `查看更多${footerName}房源`;
  const navigate = useNavigate();

  function handleGoEntire() {
    navigate("/entire");
  }

  return (
    <RoomFooterWrapper color={`${footerName ? "#008489" : "#000"}`}>
      <div className="footerBox" onClick={handleGoEntire}>
        <span>{seeAll}</span>
        <IconMoreArrow />
      </div>
    </RoomFooterWrapper>
  );
});

RoomFooter.propTypes = {
  footerName: PropTypes.string,
};

export default RoomFooter;
