import React from 'react'

const Event = (e) => (
  <div className="rbc-event" style={{
    ...e.children.props.style,
    borderColor: "rgb(" + e.event.color + ")",
    width: e.children.props.style.width === "65%" ? "50%" : e.children.props.style.width,
    left: e.children.props.style.left === "35%" ? "50%" : e.children.props.style.left,
    background: "#FBFBFB",
    padding: 0,
    color: "#000"
  }} onClick={e.children.props.onClick}>
    <div className="rbc-event-label" style={{
      background: "rgb(" + e.event.color + ")",
      width: "100%",
      padding: "2px 10px"
    }}>
      {e.event.startHour} - {e.event.endHour}
    </div>

    <div className="rbc-event-content" style={{
      textAlign: "center",
      paddingTop: "5px"
    }}>
      <b>{e.event.name}</b><br/>
      <b>{e.event.classroom}</b><br/>
      {e.event.class.map((c, i) => (
        <i key={i}>{c}<br/></i>
      ))}
      <p>{e.event.instructor}</p>
    </div>
  </div>
)

export default Event
