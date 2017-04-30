import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Navbar from './Navbar'
import Home from '../home/Home'
import CalendarResources from '../calendar/CalendarResources'
import CalendarEvents from '../calendar/CalendarEvents'
import { receiveToken, askUser } from '../../redux/app/actions'
import { sdk } from '../../services/upem'

class App extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props

    sdk.onToken(token => {
     dispatch(receiveToken(token))
     dispatch(askUser())
    })
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <main>
          <Navbar />
          
          <Route exact path="/" title="home" component={Home} />
          <Route exact path="/calendar" title="calendar_resources" component={CalendarResources} />
          <Route path="/calendar/:resources" title="calendar_events" component={CalendarEvents} />
        </main>
      </ConnectedRouter>
    )
  }
}

export default connect()(App)
