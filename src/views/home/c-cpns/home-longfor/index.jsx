import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomHeader from "@/components/room-header";
import LongforItem from "@/components/longfor-item";
import { HomeLongforWrapper } from "./style";
import ScrollView from "@/base-ui/srcoll-view";

const HomeLongfor = memo((props) => {
  const {
    longforData: { list = [], title, subtitle },
  } = props;
  return (
    <HomeLongforWrapper>
      <RoomHeader title={title} subTitle={subtitle} />
      <div className="contentBox">
        <ScrollView>
          {list.map((item, index) => {
            console.log(item);
            return <LongforItem longforData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </HomeLongforWrapper>
  );
});

HomeLongfor.propTypes = {
  longforData: PropTypes.object,
};

export default HomeLongfor;
