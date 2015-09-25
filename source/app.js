import React from 'react'
import { Link } from 'react-router'
import CheckboxWithLabel from './components/CheckboxWithLabel'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <CheckboxWithLabel labelOn='On' labelOff='Off' />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = { children: React.PropTypes.element.isRequired }

export default App
