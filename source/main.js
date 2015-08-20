import React from 'react'
import { Router, Route, Link } from 'react-router'
import { history } from 'react-router/lib/HashHistory'
import login from './components/login'
import CheckboxWithLabel from './components/CheckboxWithLabel'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = { children: React.PropTypes.element.isRequired }

React.render((
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='login' component={login}/>
    </Route>
  </Router>
), document.body)
