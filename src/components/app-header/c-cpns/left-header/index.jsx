import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

const LeftHeader = memo((props) => {
  return (
    <LeftWrapper>
      <IconLogo />
    </LeftWrapper>
  );
});

export default LeftHeader;
