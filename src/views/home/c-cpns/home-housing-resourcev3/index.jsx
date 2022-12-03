import React, { memo } from "react";
import PropTypes from "prop-types";
import ScrollView from "@/base-ui/srcoll-view";
import RoomFooter from "@/components/room-footer";
import RoomHeader from "@/components/room-header";
import RoomItem from "@/components/room-item";

import { HomeHousingResourceV3Wrapper } from "./style";

const HomeHousingResourceV3 = memo((props) => {
  const {
    houseResourceData: { title, subtitle, list = [] },
  } = props;
  return (
    <HomeHousingResourceV3Wrapper>
      <RoomHeader title={title} subTitle={subtitle} />
      <div className="plusBox">
        <ScrollView>
          {list.map((item) => {
            return <RoomItem key={item.id} item={item} itemWidth={"20%"} />;
          })}
        </ScrollView>
      </div>

      <RoomFooter footerName={"plus"} />
    </HomeHousingResourceV3Wrapper>
  );
});

HomeHousingResourceV3.propTypes = {
  houseResourceData: PropTypes.object,
};

export default HomeHousingResourceV3;
