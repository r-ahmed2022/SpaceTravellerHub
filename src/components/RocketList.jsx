import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket'

export default function RocketList() {
    const { list } = useSelector((state) => state?.rocketslist);
    const dispatch = useDispatch()
   
     const rocketList = list?.map((rocket) => {
          return <Rocket key={rocket.id} rocket={rocket}/>
    })
  return (
    <div className="rocketlist">
      {rocketList}
    
    </div>
  )
}
