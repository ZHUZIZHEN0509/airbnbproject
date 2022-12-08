import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchContent from "./c-cpns/search-content";
import searchTitles from "@/assets/data/search_titles.json";

const CenterHeader = memo((props) => {
  //进入退出动画
  const { isSearch, searchClick } = props;
  //选中索引
  const [selectIndex, setSelectIndex] = useState(0);
  const titles = searchTitles.map((searchItem) => searchItem.title);
  //调用点击事件，切换动画状态 ***切换成tabs
  function searchBoxClick() {
    if (searchClick) searchClick();
  }
  return (
    <CenterWrapper>
      <CSSTransition
        classNames="search"
        unmountOnExit={true}
        timeout={250}
        in={!isSearch}
      >
        <div className="searchBox" onClick={searchBoxClick}>
          <div className="searchText">搜索房源和体验</div>
          <div className="iconSearchBox">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="tabs"
        unmountOnExit={true}
        timeout={250}
        in={isSearch}
      >
        <div className="tabsBox">
          <SearchTabs titles={titles} setSelectFn={setSelectIndex} />
          <div className="infoBox">
            <SearchContent
              searchInfos={searchTitles[selectIndex].searchInfos}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

CenterHeader.propTypes = {
  isSearch: PropTypes.bool,
  searchClick: PropTypes.func,
};

export default CenterHeader;
