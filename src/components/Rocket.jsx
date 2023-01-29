import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { LIST_ROCKETS } from '../redux/Rocket/rocket'



export default function Rocket(props) {
    const { list } = useSelector((state) => state?.rocketslist);
    const {onclick} = props
    const [reserved, setReserved] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(LIST_ROCKETS())
      
    }, [dispatch])

    const setReserve = (id) => {
        setReserved(prev => !prev)
      }

    const rocketList = list.map((rocket) => {
          return <div className="rocket">
                     <div className="rocket-img-div">
                         <img className="rocket-img"src={rocket.flickr_images[0]} />
                     </div>
                     <div className="rocket-info">
                         <h4>{rocket.name}</h4>
                         <p>{rocket.description}</p>
                        <button className='active' onClick={() => setReserve(rocket.id)}>{reserved? "Reserve" : "Cancel"}</button> 
                     </div>
                     
                  </div>
    })
  return (
    <div className="rocketlist">
      {rocketList}
    
    </div>
  )
}
