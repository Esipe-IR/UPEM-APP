import React from 'react'
import { connect } from 'react-redux'
import { receiveView } from '../../redux/calendar/actions'
import EventTable from './event/EventTable'
import EventsTable from './events/EventsTable'
import WeekSelection from './events/WeekSelection'

class CalendarEvents extends React.Component {
  componentDidMount() {
    this.props.dispatch(receiveView(window.innerWidth > 900 ? 0 : 1))
    window.addEventListener("resize", this.onResize.bind(this), false)
  }

  onResize() {
    this.props.dispatch(receiveView(window.innerWidth > 900 ? 0 : 1))
  }

  display() {
    if (this.props.view === 0) return (
      <div>
        <EventsTable resources={this.props.match.params.resources}/>
        <WeekSelection resources={this.props.match.params.resources}/>
      </div>
    )
    else if (this.props.view === 1) return (
      <div>
        <EventTable resources={this.props.match.params.resources}/>
      </div>
    )
  }
  
  render() {
    return (
      <section className="container">
        {this.display()}
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state

  return {
    view: calendar.view
  }
}

export default connect(mapStateToProps)(CalendarEvents)
