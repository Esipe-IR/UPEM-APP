import React from 'react'

const Event = (e) => (
  <div className="rbc-event" style={{
    ...e.children.props.style,
    borderColor: "rgb(" + e.event.color + ")",
    width: e.children.props.style.width === "65%" ? "50%" : e.children.props.style.width,
    left: e.children.props.style.left === "35%" ? "50%" : e.children.props.style.left,
    background: "#FFF",
    padding: 0,
    color: "black"
  }} onClick={e.children.props.onClick}>
    <div className="rbc-event-label" style={{
      background: "rgb(" + e.event.color + ")",
      width: "100%",
      padding: "5px 10px"
    }}>
      {e.event.startHour} - {e.event.endHour} ({e.event.instructor})
    </div>

    <div className="rbc-event-content" style={{
      textAlign: "center",
      paddingTop: "10px"
    }}>
      <b>{e.event.name}</b>
      <p>{e.event.classroom}<br/>
      {e.event.class.map((c, i) => (
        <span key={i}>{c} </span>
      ))}
      </p>
    </div>
  </div>
)

export default Event
