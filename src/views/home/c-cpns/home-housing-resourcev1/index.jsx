import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomHeader from "@/components/room-header";
import RoomList from "@/components/room-list";
import { HousingResourceWrapperV1 } from "./style";
import RoomFooter from "@/components/room-footer";

//对高分房源和高性价比房源进行二次封装
const HomeHousingResourceV1 = memo((props) => {
  const { houseResourceData } = props;
  return (
    <HousingResourceWrapperV1>
      <RoomHeader
        title={houseResourceData.title}
        subTitle={houseResourceData.subtitle}
      />
      <RoomList roomList={houseResourceData.list} />
      <RoomFooter />
    </HousingResourceWrapperV1>
  );
});

HomeHousingResourceV1.propTypes = {
  houseResourceData: PropTypes.object,
};

export default HomeHousingResourceV1;
