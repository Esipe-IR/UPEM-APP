import React from 'react'
import { connect } from 'react-redux'
import {
  rcvView,
  rcvDay,
  rcvWeek,
  rcvFocused,
  rcvModal,
  askEvents
} from './redux/actions'
import {
  getFirstWeekDay,
  getLastWeekDay,
  getMomentFromDate,
  getWeekNb,
  getDayByWeek
} from '../services/date'
import { eventToDate } from '../services/format'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Event from './sub/Event'
import EventModal from './sub/EventModal'

class CalendarEvents extends React.Component {
  componentDidMount() {
    let f = getFirstWeekDay()
    let l = getLastWeekDay()

    this.props.dispatch(rcvView(window.innerWidth > 900 ? "week" : "day"))
    this.props.dispatch(rcvDay(f))
    this.props.dispatch(rcvWeek(getWeekNb(f)))
    this.props.dispatch(askEvents({
      resources: this.props.match.params.resources,
      startDate: f,
      endDate: l
    }))
    
    window.addEventListener("resize", this.onResize.bind(this), false)
  }

  onResize() {
    this.props.dispatch(rcvView(window.innerWidth > 900 ? "week" : "day"))
  }

  onDateChange(day) {
    let week = getWeekNb(day)
    this.props.dispatch(rcvDay(day))
    if (this.props.week !== week) {
      this.props.dispatch(rcvWeek(week))
      this.props.dispatch(askEvents({
        resources: this.props.match.params.resources,
        startDate: getDayByWeek("lundi", week),
        endDate: getDayByWeek("vendredi", week)
      }))
    }
  }

  onFocusChange(e) {
    this.props.dispatch(rcvFocused(e.focused))
  }
  
  onNavigate(e) {
    let day = getMomentFromDate(e)
    this.onDateChange(day)
  }

  onView(view) {
    this.props.dispatch(rcvView(view))
  }

  startAccessor(e) {
    let d = eventToDate(e)
    d.setHours(parseInt(e.startHour[0] + e.startHour[1], 10))
    d.setMinutes(parseInt(e.startHour[3] + e.startHour[4], 10))

    return d
  }

  endAccessor(e) {
    let d = eventToDate(e)
    d.setHours(parseInt(e.endHour[0] + e.endHour[1], 10))
    d.setMinutes(parseInt(e.endHour[3] + e.endHour[4], 10))

    return d
  }

  onClick(e) {
    this.props.dispatch(rcvModal(e))
  }
  
  render() {
    return (
      <section className="container-fluid">
        {this.props.day ?
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <SingleDatePicker
                focused={this.props.focused}
                date={this.props.day}
                numberOfMonths={1}
                withFullScreenPortal={true}
                isOutsideRange={() => false}
                onDateChange={this.onDateChange.bind(this)}
                onFocusChange={this.onFocusChange.bind(this)}
              />
            </div>
          </div>
          <div className="col-12 mt-5">
            <BigCalendar
              date={this.props.day.toDate()}
              events={this.props.events}
              views={["day", "week"]}
              view={this.props.view}
              min={new Date(2017, 3, 30, 8)}          
              max={new Date(2017, 3, 30, 19)}          
              startAccessor={this.startAccessor}
              endAccessor={this.endAccessor}
              onNavigate={this.onNavigate.bind(this)}
              onView={this.onView.bind(this)}
              onSelecting={this.onClick.bind(this)}
              onSelectEvent={this.onClick.bind(this)}
              components={{
                eventWrapper: Event,
                toolbar: (e,y,z) => {console.log(e,y,z); return null}
              }}
            />
          </div>
        </div>
        :
        null
        }
        <EventModal />
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar } = state

  return {
    view: calendar.view,
    day: calendar.day,
    week: calendar.week,
    focused: calendar.focused,
    events: calendar.events
  }
}

export default connect(mapStateToProps)(CalendarEvents)
