import React from 'react'

const onClickPrevious = (props) => {
  if (props.view === "week") {
    return props.onNavigate(props.date.setDate(props.date.getDate() - 7))
  }

  return props.onNavigate(props.date.setDate(props.date.getDate() - 1))
}

const onClickNext = (props) => {
  if (props.view === "week") {
    return props.onNavigate(props.date.setDate(props.date.getDate() + 7))
  }

  return props.onNavigate(props.date.setDate(props.date.getDate() + 1))
}

const Toolbar = (props) => (
  <div className="row justify-content-between mb-3">
    <div className="col-4">
      <button className="mr-2 btn btn-secondary" onClick={() => onClickPrevious(props)}>Prev.</button>
      <button className="btn btn-secondary" onClick={() => onClickNext(props)}>Next</button>
    </div>

    <div className="col-4 text-right">
      <button className={"mr-2 btn " + (props.view === "day" ? "btn-info" : "btn-outline-info")} onClick={() => props.onViewChange("day")}>Day</button>
      <button className={"btn " + (props.view === "week" ? "btn-info" : "btn-outline-info")} onClick={() => props.onViewChange("week")}>Week</button>
    </div>
  </div>
)

export default Toolbar
