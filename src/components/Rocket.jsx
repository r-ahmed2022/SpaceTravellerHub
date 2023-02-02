import React from 'react'
import { JOIN_ROCKET } from '../redux/Rocket/rocket'
import {useDispatch} from 'react-redux'

export default function Rocket(props) {
    const dispatch = useDispatch();
    const {rocket} = props
    const setReserve = (rocket) => {
        dispatch(JOIN_ROCKET(rocket.id))
     }
  return (
<div className="rocket">
                     <div className="rocket-img-div">
                         <img className="rocket-img"src={rocket.flickr_images[0]} />
                     </div>
                     <div className="rocket-info">
                         <h4>{rocket.name}</h4>                        
                          <span className={!rocket.reserved? 'member-badge' : ' '}>{rocket.reserved  ? '' : "Reserved"}</span>
                         <p>{rocket.description}</p>
                        <button className={rocket.reserved? 'activebtn' : 'leave-rocket-btn'} onClick={() => setReserve(rocket)}>{rocket.reserved? "Reserve Rocket" : "Cancel Reservation"}</button> 
                     </div>
                     
                  </div>
  )
}
