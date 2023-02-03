import React from 'react';
import { useSelector } from 'react-redux';
import { JOIN_ROCKET } from '../redux/Rocket/rocket'
import { JOIN_MISSION } from '../redux/Missions/mission'
import {useDispatch} from 'react-redux'

export default function Profile() {
  const { list } = useSelector((state) => state?.rocketslist);
  const dispatch = useDispatch();
  const rocketBookings = list?.map((rocket) => {
    return (!rocket.reserved) ? (<li className="item" key={rocket.id}>{rocket.name}
   <button className='leave-mission-btn' onClick={() => dispatch(JOIN_ROCKET(rocket.id))}>Cancel Reservation</button> 

    </li>) : null;
  });

  const { list: missionList } = useSelector((state) => state?.missionlist);
  const missionBookings = missionList?.map((mission) => {
    return (mission.reserved) ? <li className="item" key={mission.mission_id}>{mission.mission_name}
       <button className='leave-mission-btn' onClick={() => dispatch(JOIN_MISSION(mission.mission_id))}>Cancel Reservation</button> 
    </li> : null;
  });
  console.log(rocketBookings)
  return (
    <div className="bookings">
       <div className="rocket-bookings">
          <h1>My Missions</h1>
          <ul className="bookings-list">
            { (missionBookings.every(element => element === null )) ? 
            <div className="emptybookings-list">
            <h4>Join your favorite Mission</h4>

            <button type="button" className="activebtn" 
             onClick={ () => {
                   document.location.replace("/mission")
                  }            
              }>Join Mission</button>
            </div> 
            : missionBookings 
            }
          </ul>
      </div>
      <div className="mission-bookings">
         <h1>My Rockets</h1>
          <ul className="bookings-list">
          { 
             (rocketBookings.every(element => element === null )) ? 
             <div className="emptybookings-list">
             <h4>Book your favorite rocket</h4>
             <button type="button" className="activebtn" 
             onClick={ () => {
                   document.location.replace("/")
                  }            
              }>Reserve Rocket</button></div> 
              : rocketBookings
          }
          </ul>
          
      </div>
    </div>
  );
}
