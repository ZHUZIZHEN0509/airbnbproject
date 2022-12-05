import Indicator from "@/base-ui/indicator";
import { DetailWrapper } from "./style";
import React, { memo, useState } from "react";

const Detail = memo(() => {
  const [index, setIndex] = useState(0);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handleIndicatorClick(item) {
    setIndex(item);
  }
  return (
    <DetailWrapper>
      Detail
      <Indicator clickIndex={index}>
        {list.map((item, i) => {
          return (
            <div
              key={item}
              className="item"
              onClick={(e) => handleIndicatorClick(i)}
            >
              <span> {item}</span>
            </div>
          );
        })}
      </Indicator>
    </DetailWrapper>
  );
});

export default Detail;
