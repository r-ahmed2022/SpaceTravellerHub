import React, {useState} from 'react'
import { JOIN_ROCKET } from '../redux/Rocket/rocket'
import {useDispatch} from 'react-redux'

export default function Rocket(props) {
    const dispatch = useDispatch();
    const [reserved, setReserved] = useState(true)
    const {rocket} = props
    const setReserve = (rocket) => {
        setReserved(prev => !prev)
        dispatch(JOIN_ROCKET(rocket.id))
     }
  return (
<div className="rocket">
                     <div className="rocket-img-div">
                         <img className="rocket-img"src={rocket.flickr_images[0]} />
                     </div>
                     <div className="rocket-info">
                         <h4>{rocket.name}</h4>
                         <p>{rocket.description}</p>
                        <button className='active' onClick={() => setReserve(rocket)}>{reserved? "Reserve" : "Cancel"}</button> 
                     </div>
                     
                  </div>
  )
}
