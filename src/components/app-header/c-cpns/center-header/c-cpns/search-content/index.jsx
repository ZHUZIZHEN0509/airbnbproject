import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import { SearchContentWrapper } from "./style";

const SearchContent = memo((props) => {
  const { searchInfos = [] } = props;
  return (
    <SearchContentWrapper>
      <div className="searchContentBox">
        {searchInfos.map(({ title, desc }, index) => {
          return (
            <Fragment key={desc}>
              <div className="contentItem">
                <span>{title}</span>
                <span>{desc}</span>
              </div>
              {index !== searchInfos.length - 1 && <div className="line"></div>}
            </Fragment>
          );
        })}
      </div>
    </SearchContentWrapper>
  );
});

SearchContent.propTypes = {
  searchInfos: PropTypes.array,
};

export default SearchContent;
