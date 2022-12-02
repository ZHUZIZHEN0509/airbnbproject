import React, { memo } from 'react'
import { CenterWrapper } from "./style"
import IconSearchBar from '@/assets/svg/icon-search-bar'

const CenterHeader = memo(() => {
  return (
    <CenterWrapper>
      <div className='searchBox'>
        <div className='searchText'>搜索房源和体验</div>
        <div className='iconSearchBox'>
        <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default CenterHeader