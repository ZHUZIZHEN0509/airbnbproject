import React, { memo } from 'react'

import { HeaderWrapper } from "./style"
import LeftHeader from './c-cpns/left-header'
import CenterHeader from './c-cpns/center-header'
import RightHeader from './c-cpns/right-header'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
    </HeaderWrapper>
  )
})

export default AppHeader