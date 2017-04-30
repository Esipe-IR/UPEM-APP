import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { UPEM_URL } from '../../services/upem'

class Navbar extends React.Component {
  load(e) {
    e.preventDefault()
    let path = e.target.getAttribute("href", 2)
    this.props.dispatch(push(path))
  }

  navItem() {
    if (this.props.user) {
      return (
        <div>
          <span className="navbar-text">
            { this.props.user.uid }
          </span>
        </div>
      )
    }

    return (
      <iframe frameBorder="0" src={UPEM_URL + "/connect"} id="upem-connect"></iframe>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button 
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/" onClick={this.load.bind(this)}>UPEM Tools</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={this.load.bind(this)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendar" onClick={this.load.bind(this)}>Calendar</a>
            </li>
          </ul>

          {this.navItem()}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { app } = state

  return {
    user: app.user
  }
}

export default connect(mapStateToProps)(Navbar)
