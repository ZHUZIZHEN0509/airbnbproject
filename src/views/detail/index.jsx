import React, { memo } from "react";

import DetailPicture from "./c-cpns/detail-picture";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
