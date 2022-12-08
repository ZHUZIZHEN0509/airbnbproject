import React, { memo } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import { EntirePaginationWrapper } from "./style";

const EntirePagination = memo((props) => {
  const dispatch = useDispatch();
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );
  //总页数
  const totalPage = Math.ceil(totalCount / 20);
  //start
  const startRoom = currentPage * 20 + 1;
  //end
  const endRoom = (currentPage + 1) * 20;
  function handleChangePage(event, page) {
    //修改currentPage
    // dispatch(changeCurrentPageAction(page - 1));
    //发送网络请求
    dispatch(fetchRoomListAction(page - 1));
  }
  return (
    <EntirePaginationWrapper>
      <div className="paginationBox">
        <div className="paginationHeader">
          <Pagination
            count={totalPage}
            page={currentPage + 1}
            onChange={handleChangePage}
          />
        </div>
        <div className="paginationFooter">
          第 {startRoom} - {endRoom}个房源，共超过 {totalCount} 个
        </div>
      </div>
    </EntirePaginationWrapper>
  );
});

EntirePagination.propTypes = {
  totalCount: PropTypes.number,
};

export default EntirePagination;
