import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import RoomHeader from "@/components/room-header";
import RoomList from "@/components/room-list";
import RoomTabs from "@/components/room-tabs";
import { HomeHousingResourceWrapperV2 } from "./style";
import RoomFooter from "@/components/room-footer";

const HomeHousingResourceV2 = memo((props) => {
  const { houseResourceData } = props;
  /***useState初始值只在组件第一次渲染有效  解决：(1)在外面判断没有数据不做渲染(2)useEffect监听值变化设置name（会渲染多次，没数据、有数据、数据变化）了解 */
  const initName = Object.keys(houseResourceData.dest_list)[0];
  const [name, setName] = useState(initName);

  //第一次获取可能没有值，需要可选
  const tabList = houseResourceData.dest_address?.map(({ name }) => name);

  const tabItemClick = useCallback((itemname) => {
    setName(itemname);
  }, []);

  return (
    <HomeHousingResourceWrapperV2>
      <RoomHeader
        title={houseResourceData.title}
        subTitle={houseResourceData.subtitle}
      />
      <RoomTabs tabList={tabList} tabItemClick={tabItemClick} />
      <RoomList
        roomList={houseResourceData.dest_list?.[name]}
        itemWidth={"33.3333%"}
      />
      <RoomFooter footerName={name} />
    </HomeHousingResourceWrapperV2>
  );
});

HomeHousingResourceV2.propTypes = {
  houseResourceData: PropTypes.object,
};

export default HomeHousingResourceV2;
