import React from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { push } from 'react-router-redux'
import { rcvToggleNav } from './redux/actions'
import { UPEM_URL } from '../services/upem'
import { logEvent } from '../services/analytics'

class Topbar extends React.Component {
  load(e) {
    e.preventDefault()
    let path = e.target.getAttribute("href", 2)

    logEvent("navbar_clickLink", null, {
      uri: path
    })
    
    this.props.dispatch(push(path))
    this.props.dispatch(rcvToggleNav(false))
  }

  onClick() {
    this.props.dispatch(rcvToggleNav(!this.props.toggleNav))
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
      <div>
        <Navbar color="inverse" full inverse toggleable>
          <NavbarToggler right onClick={this.onClick.bind(this)} />
          <NavbarBrand href="/">UPEM Tools</NavbarBrand>
          <Collapse isOpen={this.props.toggleNav} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.load.bind(this)} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.load.bind(this)} href="/calendar">Calendar</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { app } = state

  return {
    user: app.user,
    toggleNav: app.toggleNav
  }
}

export default connect(mapStateToProps)(Topbar)
