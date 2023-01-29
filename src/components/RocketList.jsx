import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket'
import { LIST_ROCKETS } from '../redux/Rocket/rocket'

export default function RocketList() {
    const { list } = useSelector((state) => state?.rocketslist);
    console.log(list)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(LIST_ROCKETS())
      
    }, [dispatch])

     const rocketList = list?.map((rocket) => {
          return <Rocket key={rocket.id} rocket={rocket}/>
    })
  return (
    <div className="rocketlist">
      {rocketList}
    
    </div>
  )
}
