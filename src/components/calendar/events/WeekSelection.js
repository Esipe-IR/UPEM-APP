import React from 'react'
import { connect } from 'react-redux'
import { receiveWeek, askWeekEvents } from '../../../redux/calendar/actions'
import { getDayByWeek } from '../../../services/date'

const PADDING = 2

class WeekSelection extends React.Component {
  range() {
    let arr = []

    for (let i = PADDING; i > 0; i--) {
      arr.push({
        nb: this.props.currentWeek - i,
        str:getDayByWeek("lundi", this.props.currentWeek - i).format("dddd DD MMMM")
      })
    }

    arr.push({
      nb: this.props.currentWeek,
      str: getDayByWeek("lundi", this.props.currentWeek).format("dddd DD MMMM")
    })

    for (let i = 1; i < PADDING + 1; i++) {
      arr.push({
        nb: this.props.currentWeek + i,
        str: getDayByWeek("lundi", this.props.currentWeek + i).format("dddd DD MMMM")
      })
    }

    return arr
  }

  onClickWeek(e) {
    e.preventDefault()

    let c = e.target.dataset.nb
    c = parseInt(c, 10)

    let f = getDayByWeek("lundi", c)
    let l = getDayByWeek("samedi", c)

    this.props.dispatch(receiveWeek(c))
    this.props.dispatch(askWeekEvents({
      resources: this.props.resources,
      startDate: f,
      endDate: l
    }))
  }
  
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" data-nb={this.props.currentWeek - 1} onClick={this.onClickWeek.bind(this)}>
              Previous
            </a>
          </li>

          {this.range().map((week, index) => (
            <li key={index} className={"page-item " + (week.nb === this.props.currentWeek ? "active" : "")}>
              <a className="page-link" href="#" data-nb={week.nb} onClick={this.onClickWeek.bind(this)}>
                {week.str}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#" data-nb={this.props.currentWeek + 1} onClick={this.onClickWeek.bind(this)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const { calendar } = state

  return {
    currentWeek: calendar.week
  }
}

export default connect(mapStateToProps)(WeekSelection)
