import React from 'react'

const Event = ({ event }) => (
  <div className="card" style={{width: "170px", height: "120px"}}>
    <div className="card-header" style={{background: "rgb(" + event.color + ")"}}>
      {event.startHour} - {event.endHour}
    </div>

    <div className="card-block">
      <b className="card-title">
        {event.name}
      </b>

      <p className="card-text">
        {event.instructor}
        <br/>
        {event.classroom}
      </p>
    </div>
  </div>
)

export default Event
