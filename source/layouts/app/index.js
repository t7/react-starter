// Dependencies.
import React from 'react'

// UI components.
import AppWrapper from './wrapper'
import AppHeader from './header'
import AppMain from './main'
import AppFooter from './footer'

// Define class.
class App extends React.Component {
  // Render method.
  render () {
    return (
      <div className='t7-app'>
        <AppWrapper>
          <AppHeader />
          <AppMain>
            {this.props.children}
          </AppMain>
        </AppWrapper>
        <AppFooter />
      </div>
    )
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default App
