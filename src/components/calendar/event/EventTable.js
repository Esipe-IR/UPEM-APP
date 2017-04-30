import React from 'react'
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { receiveFocused, receiveDay, askDayEvents } from '../../../redux/calendar/actions'
import { getFirstWeekDay } from '../../../services/date' 
import Event from '../sub/Event'

class EventTable extends React.Component {
  componentDidMount() {
    let day = getFirstWeekDay()
    this.props.dispatch(receiveDay(day))
    this.props.dispatch(askDayEvents({
      resources: this.props.resources,
      date: day
    }))
  }
  
  onDateChange(day) {
    this.props.dispatch(receiveDay(day))
    this.props.dispatch(askDayEvents({
      resources: this.props.resources,
      date: day
    }))
  }
  
  onFocusChange(event) {
    this.props.dispatch(receiveFocused(event.focused))
  }

  render() {
    return (
      <div>
        {this.props.day ? <SingleDatePicker
            focused={this.props.focused}
            date={this.props.day}
            numberOfMonths={1}
            withPortal={true}
            isOutsideRange={() => false}
            onDateChange={this.onDateChange.bind(this)}
            onFocusChange={this.onFocusChange.bind(this)}
        /> : null}
        <table className="table table-responsive table-bordered">
            <thead>
              <tr>
                <th className="table-active">Heure</th>
                <th>Today</th>
              </tr>
            </thead>
            <tbody>
              {this.props.events ? this.props.events.map((event, i) => (
                <tr key={i}>
                  <th>
                    {event.startHour}
                  </th>

                  <td>
                    {event ? <Event event={event} /> : <div style={{width: "170px", height: "120px"}}></div>}
                  </td>
                </tr>
              )) : null}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state
 
  return {
    day: calendar.day,    
    focused: calendar.focused,
    events: calendar.dayEvents
  }
}

export default connect(mapStateToProps)(EventTable)
