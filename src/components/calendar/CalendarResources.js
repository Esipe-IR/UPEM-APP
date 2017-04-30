import React from 'react'
import { connect } from 'react-redux'
import { askResources } from '../../redux/calendar/actions' 
import Resource from './sub/Resource'

class CalendarResoucres extends React.Component {
  componentDidMount() {
    this.props.dispatch(askResources())
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          {this.props.resources.map(resource => (
            <div className="col-3 text-center" key={resource.id}>
              <Resource resource={resource} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state

  return {
    resources: calendar.resources
  }
}

export default connect(mapStateToProps)(CalendarResoucres)
