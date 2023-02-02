import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { list } = useSelector((state) => state?.rocketslist);
  const rocketBookings = list?.map((rocket) => {
    if (!rocket.reserved) {
      return (<li className="item" key={rocket.id}>{rocket.name}</li>);
    }
    return null;
  });

  const { list: missionList } = useSelector((state) => state?.missionlist);
  const missionBookings = missionList?.map((mission) => {
    if (mission.reserved) {
      return (<li className="item" key={mission.mission_id}>{mission.mission_name}</li>);
    }
    return null;
  });

  return (
    <div className="bookings">
      <div className="rocket-bookings">
        <h1>My Missions</h1>
        <ul className="bookings-list">
          {missionBookings}
        </ul>
      </div>
      <div className="mission-bookings">
        <h1>My Rockets</h1>
        <ul className="bookings-list">
          {rocketBookings}
        </ul>
      </div>
    </div>
  );
}
