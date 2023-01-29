import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { LIST_ROCKETS } from '../redux/Rocket/rocket'



export default function Rocket() {
    const { list } = useSelector((state) => state?.rocketslist);
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(LIST_ROCKETS())
      
    }, [dispatch])

    const rocketList = list.map((rocket) => {
          return `<div className="rocket">
                     
          
                  </div>`
    })
  return (
    <div className="rocketlist">
     
         
    </div>
  )
}
