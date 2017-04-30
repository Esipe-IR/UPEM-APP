import React from 'react'
import { connect } from 'react-redux'
import { receiveWeek, askWeekEvents } from '../../../redux/calendar/actions'
import { getFirstWeekDay, getLastWeekDay, getWeekNb } from '../../../services/date'
import Event from '../sub/Event'

class EventsTable extends React.Component {
  componentDidMount() {
    let firstDay = getFirstWeekDay()
    let lastDay = getLastWeekDay()

    this.props.dispatch(receiveWeek(getWeekNb(firstDay)))
    this.props.dispatch(askWeekEvents({
      resources: this.props.resources,
      startDate: firstDay,
      endDate: lastDay
    }))
  }

  buildWeek() {
    let week = []
    let f = getFirstWeekDay()
    let l = getLastWeekDay()
    
    week.push(f.format("dddd DD MMMM"))
    for (let i = f.day(); i < l.day(); i++) {
      week.push(f.day(i + 1).format("dddd DD MMMM"))
    }
    return week;
  }

  render() {
    const week = this.buildWeek()

    return (
      <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th className="table-active">
                Heure
              </th>
              
              {week.map((day, i) => (
                <th key={i}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.events && this.props.events.events ? this.props.events.events.map((l, i) => (
              <tr key={i}>
                <th>
                  {this.props.events.range[i]}
                </th>

                {l.map((event, i) => (
                  <td key={i}>
                    {event ? <Event event={event} /> : <div style={{width: "170px", height: "120px"}}></div>}
                  </td>
                ))}
              </tr>
            )) : null}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state

  return {
    events: calendar.weekEvents
  }
}

export default connect(mapStateToProps)(EventsTable)
