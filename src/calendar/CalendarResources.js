import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { askResources, askSearch } from './redux/actions' 
import Resource from './sub/Resource'

class CalendarResoucres extends React.Component {
  componentDidMount() {
    this.props.dispatch(askResources())
  }

  search(e) {
    this.props.dispatch(askSearch(e.target.value))
  }

  push(e) {
    e.preventDefault()
    this.props.dispatch(push(e.target.getAttribute("href", 2)))
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <div className="input-group stylish-input-group">
                <input type="text" className="form-control" onChange={this.search.bind(this)} placeholder="Search"/>
                <span className="input-group-addon">
                  <button type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.props.resources.map(resource => (
            <div className="col-sm-4 col-xs-12 text-center" key={resource.id}>
              <Resource resource={resource} load={this.push.bind(this)} />
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
