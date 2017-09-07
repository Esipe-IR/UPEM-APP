import React from 'react'

const Resource = (props) => (
  <div className="card">
    <div className="card-block">
      <p className="card-title">{props.resource.name}</p>
      <a href={"/calendar/" + props.resource.id} onClick={props.load} className="btn btn-primary">See</a>
    </div>
  </div>
)

export default Resource
