import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SearchTabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titles, setSelectFn } = props;

  function titleClick(index) {
    if (setSelectFn) setSelectFn(index);
    setCurrentIndex(index);
  }

  return (
    <SearchTabsWrapper>
      <div className="titleBox">
        {titles.map((title, index) => {
          return (
            <div key={title} className={classNames("titleItem")}>
              <span
                className={classNames({
                  activeTitle: currentIndex === index,
                })}
                onClick={(e) => titleClick(index)}
              >
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </SearchTabsWrapper>
  );
});

SearchTabs.propTypes = {
  titles: PropTypes.array,
  setSelectFn: PropTypes.func,
};

export default SearchTabs;
