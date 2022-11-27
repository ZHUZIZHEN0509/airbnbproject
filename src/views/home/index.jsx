import React, { memo , useEffect } from 'react'
import ZHURequest from '@/services'

const Home = memo(() => {

  useEffect(()=>{
     ZHURequest.get({url: "/home/highscore"}).then(res=>{
      console.log(res);
     })
  },[])

  return (
    <div>Home</div>
  )
})

export default Home