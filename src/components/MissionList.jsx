import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { JOIN_MISSION } from '../redux/Missions/mission'

export default function MissionList() {
    const  {list} = useSelector((state) => state?.missionlist);
     const dispatch = useDispatch()
        const missionElements = list?.map((mission) => {
        return <tr className="mission-Card" key={mission.mission_id}>
                    <td><h2>{mission.mission_name}</h2></td>
                    <td><span className="desc">{mission.description}</span></td>
                    <td><button type="button" className={mission.reserved ? 'member-badge' : 'non-member-badge'} disabled>{mission.reserved ? 'Active Member' : 'Not A Member'}</button></td>
                    <td><button type="button" onClick={() => dispatch(JOIN_MISSION(mission.mission_id))}
                className={mission.reserved ? 'leave-mission-btn' : 'join-mission-btn'}>
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
                </td>
               </tr>
     })
  return (
    <div className="missionlist">
            <table className="mission-list">
                <thead><tr><th> Mission</th><th>Description</th><th>Status</th><th>Join</th></tr></thead>
                <tbody>
                {missionElements}
                </tbody>
            </table>
    </div>
  )
}
