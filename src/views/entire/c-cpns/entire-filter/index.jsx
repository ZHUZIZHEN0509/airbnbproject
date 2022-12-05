import React, { memo, useState } from "react";
import classNames from "classnames";
import filterData from "@/assets/data/filter_data.json";
import { EntireFilterWrapper } from "./style";

const EntireFilter = memo(() => {
  const [selectList, setSelectList] = useState([]);

  function handleFilterClick(item) {
    const newSelectList = [...selectList];
    if (newSelectList.includes(item)) {
      const filterIndex = newSelectList.findIndex((fitem) => fitem === item);
      newSelectList.splice(filterIndex, 1);
    } else {
      newSelectList.push(item);
    }
    setSelectList(newSelectList);
    console.log(newSelectList);
  }

  return (
    <EntireFilterWrapper>
      {filterData.map((item) => {
        return (
          <div
            className={classNames("filterItem", {
              activeFilterItem: selectList.includes(item),
            })}
            key={item}
            onClick={(e) => handleFilterClick(item)}
          >
            {item}
          </div>
        );
      })}
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
