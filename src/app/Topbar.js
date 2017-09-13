import React from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { push } from "react-router-redux";
import { rcvToggleNav } from "./redux/actions";
import { logEvent } from "../services/analytics";

class Topbar extends React.Component {
  load(path) {
    logEvent("navbar_click_link", null, {
      uri: path
    });

    this.props.dispatch(push(path));
    this.props.dispatch(rcvToggleNav(false));
  }

  onClick() {
    this.props.dispatch(rcvToggleNav(!this.props.toggleNav));
  }

  render() {
    return (
      <Navbar color="inverse" full inverse toggleable>
        <NavbarToggler right onClick={this.onClick.bind(this)} />
        <NavbarBrand href="/">UPEM APP</NavbarBrand>
        <Collapse isOpen={this.props.toggleNav} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={() => this.load("/")}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.load("/calendar")}>Calendar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.load("/mail")}>Mail</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.load("/maps")}>Maps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.load("/tools")}>Tools</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.load("/about")}>About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { app } = state;

  return {
    user: app.user,
    toggleNav: app.toggleNav
  };
};

export default connect(mapStateToProps)(Topbar);
